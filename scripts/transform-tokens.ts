import * as fs from 'fs';
import * as path from 'path';

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
  theme?: {
    light?: { [key: string]: TokenValue };
    dark?: { [key: string]: TokenValue };
  };
  global?: {
    spacing?: { [key: string]: TokenValue };
    colors?: { [key: string]: TokenValue };
  };
  brand?: {
    colors?: {
      primary?: { [key: string]: TokenValue };
      secondary?: { [key: string]: TokenValue };
      accent?: { [key: string]: TokenValue };
    };
    typography?: { [key: string]: TokenValue };
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

function flattenTokens(obj: TokenGroup, prefix = ''): Record<string, string> {
  return Object.entries(obj).reduce((acc: Record<string, string>, [key, value]) => {
    const newKey = prefix ? `${prefix}-${key}` : key;
    
    if (isTokenValue(value)) {
      // Handle different value types
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
    // Read the themes.json file
    const themesPath = path.join(process.cwd(), 'tokens', 'themes.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');
    
    // Parse the JSON file with type assertion
    const themeData = JSON.parse(fs.readFileSync(themesPath, 'utf8')) as ThemeTokens;
    
    // Flatten and transform the token structure
    const flatTokens = flattenTokens(themeData as TokenGroup);
    
    // Generate the theme interface
    const themeInterface = generateThemeInterface(flatTokens);
    
    // Generate the final TypeScript file content
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

    // Create the directory if it doesn't exist
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

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