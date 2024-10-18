import * as fs from 'fs';
import * as path from 'path';

// Define strict interfaces for tokens
interface TokenValue {
  value: string;
  type?: string;
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

interface TokenData {
  colors: {
    grey: { [key: string]: TokenValue };
    brand: { [key: string]: TokenValue };
    success: { [key: string]: TokenValue };
    warning: { [key: string]: TokenValue };
    danger: { [key: string]: TokenValue };
    generic: { [key: string]: TokenValue };
    [key: string]: { [key: string]: TokenValue };
  };
  spacing: {
    [key: string]: TokenValue;
  };
  fontSizes: {
    [key: string]: TokenValue;
  };
  lineHeights: {
    [key: string]: TokenValue;
  };
  borderRadius: {
    [key: string]: TokenValue;
  };
  [key: string]: TokenGroup;
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
    const newKey = prefix ? `${prefix}-${key}` : key;
    
    if (isTokenValue(value)) {
      acc[newKey] = value.value;
    } else if (isTokenGroup(value)) {
      Object.assign(acc, flattenTokens(value, newKey));
    }
    
    return acc;
  }, {});
}

function generateThemeInterface(tokens: Record<string, string>): string {
  const properties = Object.keys(tokens)
    .map(key => `  '${key}': string;`)
    .join('\n');
    
  return `interface BrandThemeExtension {
${properties}
}`;
}

function transformTokens(): void {
  try {
    // Read the themes.json file
    const themesPath = path.join(process.cwd(), 'tokens', 'themes.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');
    
    // Parse the JSON file with type assertion
    const themeData = JSON.parse(fs.readFileSync(themesPath, 'utf8')) as TokenData;
    
    // Flatten and transform the token structure
    const flatTokens = flattenTokens(themeData);
    
    // Generate the theme interface
    const themeInterface = generateThemeInterface(flatTokens);
    
    // Generate the final TypeScript file content
    const fileContent = `import { Theme, themeToTokensObject } from '@fluentui/react-components';

${themeInterface}

export const brandTheme: Theme & BrandThemeExtension = {
${Object.entries(flatTokens)
  .map(([key, value]) => `  '${key}': '${value}'`)
  .join(',\n')}
};

export const brandThemeTokens = themeToTokensObject(brandTheme);

export const convertHexToRgba = (hex: string): string => {
  if (hex === 'transparent') {
    return 'rgba(0, 0, 0, 0)';
  }
  const hexColor = hex.replace('#', '');
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  return \`rgba(\${r}, \${g}, \${b})\`;
};
`;

    // Write the transformed file
    fs.writeFileSync(outputPath, fileContent);
    console.log('Successfully transformed tokens and updated theme.ts');
  } catch (error) {
    console.error('Error transforming tokens:', error);
    process.exit(1);
  }
}

// Execute the transformation
transformTokens();