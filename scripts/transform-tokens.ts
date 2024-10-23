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

interface GlobalValue {
  'borderRadius': { [key: string]: TokenValue };
  'strokeWidth': { [key: string]: TokenValue };
  'spacingHorizontal': { [key: string]: TokenValue };
  'spacingVertical': { [key: string]: TokenValue };
}

interface TypographyBase {
  'fontSize': { [key: string]: TokenValue };
  'lineHeight': { [key: string]: TokenValue };
  'fontFamily': { [key: string]: TokenValue };
  'fontWeight': { [key: string]: TokenValue };
}

interface ThemeTokens {
  'global/Value': GlobalValue;
  'Typography/Base': TypographyBase;
  [key: string]: any;
}

function isTokenValue(value: unknown): value is TokenValue {
  return Boolean(
    value &&
    typeof value === 'object' &&
    'value' in value &&
    typeof (value as TokenValue).value === 'string'
  );
}

function renderTokenName(key: string): string {
  return key.replace(/-/g, '');
}

function renderTokenValues(
  tokenPrefix: string,
  tokenArray: { [key: string]: TokenValue } | undefined,
  valueSuffix: string = ''
): Record<string, string> {
  if (!tokenArray) {
    return {};
  }
  
  return Object.keys(tokenArray).reduce((acc, key) => {
    const tokenName = renderTokenName(tokenPrefix + key);
    const tokenValue = (tokenArray[key].value || '0') + valueSuffix;
    return { ...acc, [tokenName]: tokenValue };
  }, {});
}

function transformTokens(): void {
  try {
    const themesPath = path.join(process.cwd(), 'tokens', 'themes.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');
    
    const tokens = JSON.parse(fs.readFileSync(themesPath, 'utf8')) as ThemeTokens;
    
    if (!tokens['global/Value'] || !tokens['Typography/Base']) {
      throw new Error('Required token groups are missing');
    }

    const filteredTokens = {
      global: tokens['global/Value'],
      typography: tokens['Typography/Base']
    };

    const themeTokens = {
      ...renderTokenValues('borderRadius', filteredTokens.global['borderRadius'], 'px'),
      ...renderTokenValues('fontSize', filteredTokens.typography['fontSize'], 'px'),
      ...renderTokenValues('lineHeight', filteredTokens.typography['lineHeight'], 'px'),
      ...renderTokenValues('fontFamily', filteredTokens.typography['fontFamily']),
      ...renderTokenValues('fontWeight', filteredTokens.typography['fontWeight']),
      ...renderTokenValues('strokeWidth', filteredTokens.global['strokeWidth'], 'px'),
      ...renderTokenValues('spacingHorizontal', filteredTokens.global['spacingHorizontal'], 'px'),
      ...renderTokenValues('spacingVertical', filteredTokens.global['spacingVertical'], 'px')
    };

    // Generate interface from tokens
    const categoryGroups = Object.keys(themeTokens).reduce((acc: { [key: string]: string[] }, key) => {
      const category = key.replace(/[0-9]/g, '');
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

    const fileContent = `import { Theme } from '@fluentui/react-components';

interface BrandThemeExtension {
${interfaceContent}
}

export const brandTheme: Theme & BrandThemeExtension = {
${Object.entries(themeTokens)
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