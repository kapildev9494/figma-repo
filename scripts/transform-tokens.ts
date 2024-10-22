const fs = require('fs');
const path = require('path');

// Enhanced interfaces with specific token types
interface TokenValue {
  value: string;
  type?: 'color' | 'dimension' | 'shadow' | 'fontFamily' | 'number' | 'string';
  description?: string;
}

interface ThemeTokens {
  font?: {
    family?: { [key: string]: TokenValue };
    weight?: { [key: string]: TokenValue };
    size?: { [key: string]: TokenValue };
    lineHeight?: { [key: string]: TokenValue };
  };
  effect?: {
    shadow?: { [key: string]: TokenValue };
    shadowBrand?: { [key: string]: TokenValue };
    opacity?: { [key: string]: TokenValue };
  };
  shape?: {
    button?: {
      radius?: { [key: string]: TokenValue };
      padding?: { [key: string]: TokenValue };
    };
    badge?: {
      radius?: { [key: string]: TokenValue };
      padding?: { [key: string]: TokenValue };
    };
  };
  spacing?: {
    horizontal?: { [key: string]: TokenValue };
    vertical?: { [key: string]: TokenValue };
  };
  [key: string]: any;
}

function isTokenValue(value: any): value is TokenValue {
  return value && typeof value === 'object' && 'value' in value;
}

function formatValue(value: TokenValue): string {
  if (!value.type) {
    // Detect type based on value format
    if (value.value.startsWith('#') || value.value.startsWith('rgb')) {
      value.type = 'color';
    } else if (value.value.includes('px')) {
      value.type = 'dimension';
    } else if (value.value.includes('rgba') || value.value.includes('shadow')) {
      value.type = 'shadow';
    }
  }

  switch (value.type) {
    case 'color':
      return value.value.toLowerCase();
    case 'dimension':
      // Keep px values for lineHeight, convert others to rem
      return value.value.includes('lineHeight') 
        ? value.value 
        : value.value.replace(/(\d+)px/g, (_, num) => `${Number(num) / 16}rem`);
    case 'shadow':
      return value.value;
    case 'fontFamily':
      return value.value;
    case 'number':
      return value.value;
    default:
      return value.value;
  }
}

function flattenTokens(obj: any, prefix = ''): Record<string, string> {
  return Object.entries(obj).reduce((acc: Record<string, string>, [key, value]) => {
    const newKey = prefix ? `${prefix}-${key}` : key;
    
    if (isTokenValue(value)) {
      // Format key based on token type
      let formattedKey = newKey;
      if (value.type === 'color' && !formattedKey.startsWith('color')) {
        formattedKey = `color${formattedKey.charAt(0).toUpperCase()}${formattedKey.slice(1)}`;
      }
      acc[formattedKey] = formatValue(value);
    } else if (value && typeof value === 'object') {
      Object.assign(acc, flattenTokens(value, newKey));
    }
    
    return acc;
  }, {});
}

function generateThemeInterface(tokens: Record<string, string>): string {
  const categoryGroups = Object.keys(tokens).reduce((acc: { [key: string]: string[] }, key) => {
    const category = key.split('-')[0];
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(`  '${key}': string;`);
    return acc;
  }, {});

  const interfaceContent = Object.entries(categoryGroups)
    .map(([category, properties]) => (
      `  // ${category} tokens\n${properties.join('\n')}`
    ))
    .join('\n\n');

  return `interface BrandThemeExtension {
${interfaceContent}
}`;
}

function transformTokens(): void {
  try {
    const themesPath = path.join(process.cwd(), 'tokens', 'themes.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');
    
    const themeData = JSON.parse(fs.readFileSync(themesPath, 'utf8')) as ThemeTokens;
    const flatTokens = flattenTokens(themeData);
    const themeInterface = generateThemeInterface(flatTokens);
    
    const fileContent = `import { Theme } from '@fluentui/react-components';

${themeInterface}

export const brandTheme: Theme & BrandThemeExtension = {
${Object.entries(flatTokens)
  .map(([key, value]) => `  '${key}': '${value}'`)
  .join(',\n')}
};

// Utility functions for color and shadow manipulation
export const convertHexToRgba = (hex: string): string => {
  if (hex === 'transparent') return 'rgba(0, 0, 0, 0)';
  if (hex.startsWith('rgba')) return hex;
  
  const hexColor = hex.replace('#', '');
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  const a = hexColor.length === 8 ? parseInt(hexColor.substring(6, 8), 16) / 255 : 1;
  return \`rgba(\${r}, \${g}, \${b}, \${a})\`;
};

// Theme tokens object with color conversion
export const brandThemeTokens = Object.entries(brandTheme).reduce((acc, [key, value]) => {
  if (value.startsWith('#')) {
    acc[key] = convertHexToRgba(value);
  } else {
    acc[key] = value;
  }
  return acc;
}, {} as Record<string, string>);
`;

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, fileContent);
    console.log('Successfully transformed tokens and updated theme.ts');
  } catch (error) {
    console.error('Error transforming tokens:', error);
    process.exit(1);
  }
}

transformTokens();