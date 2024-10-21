const fs = require('fs');
const path = require('path');

// Define token interfaces that match Fluent UI 9 structure
interface TokenValue {
  value: string | object[];
  type?: string;
  description?: string;
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

interface FluentTokens {
  fontFamilies?: { [key: string]: TokenValue };
  lineHeights?: { [key: string]: TokenValue };
  fontWeights?: { [key: string]: TokenValue };
  fontSize?: { [key: string]: TokenValue };
  letterSpacing?: { [key: string]: TokenValue };
  paragraphSpacing?: { [key: string]: TokenValue };
  textCase?: { [key: string]: TokenValue };
  textDecoration?: { [key: string]: TokenValue };
  paragraphIndent?: { [key: string]: TokenValue };
  Elevation?: { [key: string]: TokenValue };
  [key: string]: TokenValue | TokenGroup | undefined;
}

function isTokenValue(value: unknown): value is TokenValue {
  return Boolean(
    value &&
    typeof value === 'object' &&
    'value' in value
  );
}

function isTokenGroup(value: unknown): value is TokenGroup {
  return Boolean(
    value &&
    typeof value === 'object' &&
    !('value' in value)
  );
}

function processBoxShadow(shadowArray: any[]): string {
  return shadowArray.map(shadow => 
    `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
  ).join(', ');
}

function flattenTokens(obj: TokenGroup, prefix = ''): Record<string, string> {
  return Object.entries(obj).reduce((acc: Record<string, string>, [key, value]) => {
    const newKey = prefix ? `${prefix}${key.charAt(0).toUpperCase()}${key.slice(1)}` : key;
    
    if (isTokenValue(value)) {
      if (Array.isArray(value.value) && value.type === 'boxShadow') {
        acc[newKey] = processBoxShadow(value.value);
      } else if (typeof value.value === 'object' && value.type === 'typography') {
        // Handle typography objects by flattening their properties
        const typographyObj = value.value as any;
        Object.entries(typographyObj).forEach(([typeProp, typeValue]) => {
          const propKey = `${newKey}${typeProp.charAt(0).toUpperCase()}${typeProp.slice(1)}`;
          acc[propKey] = String(typeValue).replace(/{|}/g, '');
        });
      } else {
        acc[newKey] = String(value.value);
      }
    } else if (isTokenGroup(value)) {
      Object.assign(acc, flattenTokens(value, newKey));
    }
    
    return acc;
  }, {});
}

function generateThemeInterface(tokens: Record<string, string>): string {
  const properties = Object.keys(tokens).sort().map(key => `  '${key}': string;`);
  
  return `interface FluentThemeTokens {
${properties.join('\n')}
}`;
}

function transformTokens(): void {
  try {
    const themesPath = path.join(process.cwd(), 'tokens', 'themes.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');
    
    const themeData = JSON.parse(fs.readFileSync(themesPath, 'utf8')) as FluentTokens;
    const flatTokens = flattenTokens(themeData as TokenGroup);
    const themeInterface = generateThemeInterface(flatTokens);
    
    const fileContent = `import { Theme } from '@fluentui/react-components';

${themeInterface}

export const fluentTokens: Theme & FluentThemeTokens = {
${Object.entries(flatTokens)
  .map(([key, value]) => `  '${key}': '${value}'`)
  .join(',\n')}
};

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

export const processedTokens = Object.entries(fluentTokens).reduce((acc, [key, value]) => {
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