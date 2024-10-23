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

interface ThemeColors {
  Neutral?: TokenGroup;
  Brand?: TokenGroup;
  Status?: TokenGroup;
  Shadow?: TokenGroup;
  DataViz?: TokenGroup;
  [key: string]: TokenGroup | undefined;  // Add index signature
}

interface ThemeTokens {
  'global/Value': GlobalValue;
  'Typography/Base': TypographyBase;
  'Theme/Light': ThemeColors;
  'Theme/Dark': ThemeColors;
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
  return key
    .replace(/-/g, '')
    .replace(/\s+(\w)/g, (_, letter) => letter.toUpperCase())
    .replace(/\s+/g, '');
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

function processNestedTokens(obj: TokenGroup, categoryName: string, prefix: string = ''): Record<string, string> {
  const result: Record<string, string> = {};
  
  function processLevel(current: TokenGroup | TokenValue, currentPrefix: string) {
    if (current && typeof current === 'object') {
      if ('value' in current && typeof current.value === 'string') {
        let tokenName;
        if (categoryName) {
          tokenName = `color${categoryName}${currentPrefix}`;
        } else {
          tokenName = `color${currentPrefix}`;
        }
        tokenName = renderTokenName(tokenName);
        result[tokenName] = current.value;
      } else if (!('value' in current)) {
        // This confirms current is a TokenGroup and not a TokenValue
        Object.entries(current).forEach(([key, value]) => {
          const newPrefix = currentPrefix ? `${currentPrefix}${key}` : key;
          processLevel(value, newPrefix);
        });
      }
    }
  }
  
  processLevel(obj, prefix);
  return result;
}

function processThemeColors(themeColors: ThemeColors | undefined, themeType: 'light' | 'dark'): Record<string, string> {
  if (!themeColors) {
    return {};
  }

  const result: Record<string, string> = {};
  const categories = ['Neutral', 'Brand', 'Status', 'Shadow', 'DataViz'] as const;
  
  categories.forEach(category => {
    const categoryTokens = themeColors[category];
    if (categoryTokens) {
      const processed = processNestedTokens(categoryTokens, category);
      Object.entries(processed).forEach(([key, value]) => {
        const themeKey = `${key}${themeType.charAt(0).toUpperCase() + themeType.slice(1)}`;
        result[themeKey] = value;
      });
    }
  });

  return result;
}

function transformTokens(): void {
  try {
    const themesPath = path.join(process.cwd(), 'tokens', 'themes.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');
    
    const tokens = JSON.parse(fs.readFileSync(themesPath, 'utf8')) as ThemeTokens;
    
    if (!tokens['global/Value'] || !tokens['Typography/Base']) {
      throw new Error('Required token groups are missing');
    }

    const themeTokens = {
      ...renderTokenValues('borderRadius', tokens['global/Value']['borderRadius'], 'px'),
      ...renderTokenValues('fontSize', tokens['Typography/Base']['fontSize'], 'px'),
      ...renderTokenValues('lineHeight', tokens['Typography/Base']['lineHeight'], 'px'),
      ...renderTokenValues('fontFamily', tokens['Typography/Base']['fontFamily']),
      ...renderTokenValues('fontWeight', tokens['Typography/Base']['fontWeight']),
      ...renderTokenValues('strokeWidth', tokens['global/Value']['strokeWidth'], 'px'),
      ...renderTokenValues('spacingHorizontal', tokens['global/Value']['spacingHorizontal'], 'px'),
      ...renderTokenValues('spacingVertical', tokens['global/Value']['spacingVertical'], 'px'),
      ...processThemeColors(tokens['Theme/Light'], 'light'),
      ...processThemeColors(tokens['Theme/Dark'], 'dark')
    };

    const fileContent = `import { Theme } from '@fluentui/react-components';

export const brandTheme: Theme = {
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