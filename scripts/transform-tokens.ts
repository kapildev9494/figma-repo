const fs = require('fs');
const path = require('path');

interface TokenValue {
  value: string;
  type?: string;
  description?: string;
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

interface ThemeTokens {
  font?: {
    family?: { [key: string]: TokenValue };
    weight?: { [key: string]: TokenValue };
    size?: { [key: string]: TokenValue };
  };
  effect?: {
    shadow?: { [key: string]: TokenValue };
    opacity?: { [key: string]: TokenValue };
  };
  treeIndentation?: {
    level?: { [key: string]: TokenValue };
  };
  popoverSize?: {
    width?: { [key: string]: TokenValue };
    height?: { [key: string]: TokenValue };
  };
  cardPadding?: {
    default?: { [key: string]: TokenValue };
    compact?: { [key: string]: TokenValue };
  };
  buttonShape?: {
    radius?: { [key: string]: TokenValue };
    padding?: { [key: string]: TokenValue };
  };
  badgeShape?: {
    radius?: { [key: string]: TokenValue };
    padding?: { [key: string]: TokenValue };
  };
  arrowPosition?: {
    offset?: { [key: string]: TokenValue };
  };
  typography?: {
    heading?: { [key: string]: TokenValue };
    body?: { [key: string]: TokenValue };
    caption?: { [key: string]: TokenValue };
  };
  [key: string]: TokenGroup | undefined;
}

function isTokenValue(value: unknown): value is TokenValue {
  return Boolean(
    value &&
    typeof value === 'object' &&
    'value' in value &&
    typeof (value as TokenValue).value === 'string'
  );
}

function isTokenGroup(value: unknown): value is TokenGroup {
  return Boolean(
    value &&
    typeof value === 'object' &&
    !('value' in value)
  );
}

function processKey(key: string, value: TokenValue): string {
  const lastPart = key.split('/').pop() || key;
  
  // Check if it's a color value (either hex or named color)
  const isColorValue = value.type === 'color' || 
                      value.value.startsWith('#') || 
                      /^(rgb|rgba|hsl|hsla|[a-zA-Z]+)/.test(value.value);
                      
  // If it's a color value and doesn't already start with 'color', prefix it
  if (isColorValue && !lastPart.toLowerCase().startsWith('color')) {
    return `color${lastPart.charAt(0).toUpperCase()}${lastPart.slice(1)}`;
  }
  
  return lastPart;
}

function flattenTokens(obj: TokenGroup): Record<string, string> {
  const flatten = (current: TokenGroup, result: Record<string, string> = {}): Record<string, string> => {
    Object.entries(current).forEach(([key, value]) => {
      if (isTokenValue(value)) {
        const processedKey = processKey(key, value);
        if (value.type === 'color' || value.value.startsWith('#')) {
          result[processedKey] = value.value.replace('#', '');
        } else if (value.type === 'dimension') {
          result[processedKey] = value.value.replace('px', 'rem');
        } else {
          result[processedKey] = value.value;
        }
      } else if (isTokenGroup(value)) {
        flatten(value, result);
      }
    });
    return result;
  };

  return flatten(obj);
}

function transformTokens(): void {
  try {
    const themesPath = path.join(process.cwd(), 'tokens', 'themes.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');
    
    const themeData = JSON.parse(fs.readFileSync(themesPath, 'utf8')) as ThemeTokens;
    const flatTokens = flattenTokens(themeData as TokenGroup);
    
    const fileContent = `import { Theme } from '@fluentui/react-components';

export const brandTheme: Theme = {
${Object.entries(flatTokens)
  .map(([key, value]) => `  '${key}': '${value}'`)
  .join(',\n')}
};

export const convertHexToRgba = (hex: string): string => {
  if (hex === 'transparent') return 'rgba(0, 0, 0, 0)';
  if (hex.startsWith('rgba')) return hex;
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : 1;
  return \`rgba(\${r}, \${g}, \${b}, \${a})\`;
};

export const brandThemeTokens = Object.entries(brandTheme).reduce((acc, [key, value]) => {
  if (key.startsWith('color')) {
    acc[key] = value.match(/^[0-9a-f]{6}$/i) ? convertHexToRgba(value) : value;
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