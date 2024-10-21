const fs = require('fs');
const path = require('path');

// Define comprehensive interfaces for all token types
interface TokenValue {
  value: string;
  type?: string;
  description?: string;
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

interface ThemeTokens {
  fontFamilies?: { [key: string]: TokenValue };
  lineHeights?: { [key: string]: TokenValue };
  fontWeights?: { [key: string]: TokenValue };
  fontSizes?: { [key: string]: TokenValue };
  letterSpacing?: { [key: string]: TokenValue };
  paragraphSpacing?: { [key: string]: TokenValue };
  typography?: {
    caption2?: TokenValue;
    caption2Strong?: TokenValue;
    caption1?: TokenValue;
    caption1Strong?: TokenValue;
    caption1Stronger?: TokenValue;
    body1?: TokenValue;
    body1Strong?: TokenValue;
    body1Stronger?: TokenValue;
    body2Semilight?: TokenValue;
    body2?: TokenValue;
    body2Strong?: TokenValue;
    body2Stronger?: TokenValue;
    title4Light?: TokenValue;
    title4Semilight?: TokenValue;
    title4?: TokenValue;
    title4Strong?: TokenValue;
  };
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

function flattenTokens(obj: TokenGroup, prefix = ''): Record<string, string> {
  return Object.entries(obj).reduce((acc: Record<string, string>, [key, value]) => {
    const newKey = prefix ? `${prefix}${capitalize(key)}` : key;

    if (isTokenValue(value)) {
      if (value.type === 'color') {
        acc[newKey] = value.value.toLowerCase();
      } else if (value.type === 'dimension') {
        acc[newKey] = value.value.replace('px', 'rem');
      } else {
        acc[newKey] = value.value;
      }
    } else if (isTokenGroup(value)) {
      Object.assign(acc, flattenTokens(value, newKey));
    }

    return acc;
  }, {});
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateThemeInterface(tokens: Record<string, string>): string {
  const categoryGroups = Object.keys(tokens).reduce((acc: { [key: string]: string[] }, key) => {
    const category = key.split(/(?=[A-Z])/)[0]; // Split on uppercase letters for camelCase
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

  return `interface BrandThemeExtension {\n${interfaceContent}\n}`;
}

function transformTokens(): void {
  try {
    const themesPath = path.join(process.cwd(), 'tokens', 'themes.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');

    const themeData = JSON.parse(fs.readFileSync(themesPath, 'utf8')) as ThemeTokens;
    
    const flatTokens = flattenTokens(themeData as TokenGroup);
    
    const themeInterface = generateThemeInterface(flatTokens);

    const fileContent = `import { Theme } from '@fluentui/react-components';

${themeInterface}

export const brandTheme: Theme & BrandThemeExtension = {
${Object.entries(flatTokens)
      .map(([key, value]) => `  '${key}': '${value}'`)
      .join(',\n')}
};

// Utility functions
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

// Theme tokens object
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