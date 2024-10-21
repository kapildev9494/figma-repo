const fs = require('fs');
const path = require('path');

// Enhanced token interfaces
interface TokenValue {
  value: string | number | object[] | Record<string, any>;
  type?: string;
  description?: string;
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

// Comprehensive interface for Fluent UI tokens
interface FluentTokens {
  // Typography
  fontFamilies?: { [key: string]: TokenValue };
  lineHeights?: { [key: string]: TokenValue };
  fontWeights?: { [key: string]: TokenValue };
  fontSize?: { [key: string]: TokenValue };
  letterSpacing?: { [key: string]: TokenValue };
  paragraphSpacing?: { [key: string]: TokenValue };
  textCase?: { [key: string]: TokenValue };
  textDecoration?: { [key: string]: TokenValue };
  
  // Colors
  colorPalette?: { [key: string]: TokenValue };
  brandColors?: { [key: string]: TokenValue };
  
  // Effects
  elevation?: { [key: string]: TokenValue };
  
  // Layout
  spacing?: { [key: string]: TokenValue };
  sizing?: { [key: string]: TokenValue };
  
  // Components
  button?: { [key: string]: TokenValue };
  card?: { [key: string]: TokenValue };
  badge?: { [key: string]: TokenValue };
  popover?: { [key: string]: TokenValue };
  
  [key: string]: TokenValue | TokenGroup | undefined;
}

// Type guards
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

// Token processing class
class TokenProcessor {
  processBoxShadow(shadowArray: any[]): string {
    return shadowArray.map(shadow => 
      `${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
    ).join(', ');
  }

  processTypography(value: Record<string, any>): Record<string, string> {
    const result: Record<string, string> = {};
    Object.entries(value).forEach(([prop, val]) => {
      switch (prop) {
        case 'fontFamily':
          result[prop] = String(val).replace(/['"]/g, '');
          break;
        case 'fontSize':
          result[prop] = typeof val === 'number' ? `${val}px` : String(val);
          break;
        case 'lineHeight':
          result[prop] = typeof val === 'number' ? `${val}%` : String(val);
          break;
        default:
          result[prop] = String(val);
      }
    });
    return result;
  }

  processValue(key: string, value: TokenValue): string | Record<string, string> {
    if (Array.isArray(value.value) && value.type === 'boxShadow') {
      return this.processBoxShadow(value.value);
    }
    
    if (typeof value.value === 'object' && value.type === 'typography') {
      return this.processTypography(value.value as Record<string, any>);
    }

    // Handle specific token types
    if (key.startsWith('fontSize')) {
      return typeof value.value === 'number' ? `${value.value}px` : String(value.value);
    }
    
    if (key.startsWith('lineHeight')) {
      return typeof value.value === 'number' ? `${value.value}%` : String(value.value);
    }
    
    if (key.startsWith('color')) {
      const colorValue = String(value.value);
      return colorValue.startsWith('#') ? colorValue : `#${colorValue}`;
    }
    
    if (key.includes('spacing') || key.includes('size') || key.includes('padding')) {
      return typeof value.value === 'number' ? `${value.value}px` : String(value.value);
    }

    return String(value.value);
  }
}

function flattenTokens(obj: TokenGroup, prefix = ''): Record<string, string> {
  const processor = new TokenProcessor();
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix
      ? `${prefix}${key.charAt(0).toUpperCase()}${key.slice(1)}`
      : key;

    if (isTokenValue(value)) {
      const processed = processor.processValue(newKey, value);
      if (typeof processed === 'string') {
        result[newKey] = processed;
      } else {
        // Handle typography objects
        Object.entries(processed).forEach(([typeProp, typeValue]) => {
          result[`${newKey}${typeProp.charAt(0).toUpperCase()}${typeProp.slice(1)}`] = typeValue;
        });
      }
    } else if (isTokenGroup(value)) {
      Object.assign(result, flattenTokens(value, newKey));
    }
  }

  return result;
}

function generateThemeInterface(tokens: Record<string, string>): string {
  const properties = Object.keys(tokens)
    .sort()
    .map(key => `  '${key}': string;`);
  
  return `interface FluentThemeTokens {
${properties.join('\n')}
}`;
}

function transformTokens(): void {
  try {
    // Define paths
    const themesPath = path.join(process.cwd(), 'tokens', 'themes.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');
    
    // Read and parse theme data
    const themeData = JSON.parse(fs.readFileSync(themesPath, 'utf8')) as FluentTokens;
    const flatTokens = flattenTokens(themeData as TokenGroup);
    const themeInterface = generateThemeInterface(flatTokens);
    
    // Generate the output file content
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

    // Ensure output directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(outputPath, fileContent);
    console.log('Successfully transformed tokens and updated theme.ts');
  } catch (error) {
    console.error('Error transforming tokens:', error);
    process.exit(1);
  }
}

transformTokens();