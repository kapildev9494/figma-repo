import { Theme } from '@fluentui/react-components';
import fs from 'fs';
import path from 'path';

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
    lineHeight?: { [key: string]: TokenValue };
  };
  radius?: {
    border?: { [key: string]: TokenValue };
  };
  spacing?: {
    horizontal?: { [key: string]: TokenValue };
    vertical?: { [key: string]: TokenValue };
  };
  shadow?: { [key: string]: TokenValue };
  [key: string]: TokenGroup | undefined;
}

const borderRadiusMap: { [key: string]: string } = {
  none: 'borderRadiusNone',
  small: 'borderRadiusSmall',
  medium: 'borderRadiusMedium',
  large: 'borderRadiusLarge',
  xlarge: 'borderRadiusXLarge',
  circular: 'borderRadiusCircular'
};

const fontSizeMap: { [key: string]: string } = {
  '100': 'fontSizeBase100',
  '200': 'fontSizeBase200',
  '300': 'fontSizeBase300',
  '400': 'fontSizeBase400',
  '500': 'fontSizeBase500',
  '600': 'fontSizeBase600',
  '700': 'fontSizeHero700',
  '800': 'fontSizeHero800',
  '900': 'fontSizeHero900',
  '1000': 'fontSizeHero1000'
};

const lineHeightMap: { [key: string]: string } = {
  '100': 'lineHeightBase100',
  '200': 'lineHeightBase200',
  '300': 'lineHeightBase300',
  '400': 'lineHeightBase400',
  '500': 'lineHeightBase500',
  '600': 'lineHeightBase600',
  '700': 'lineHeightHero700',
  '800': 'lineHeightHero800',
  '900': 'lineHeightHero900',
  '1000': 'lineHeightHero1000'
};

const fontWeightMap: { [key: string]: string } = {
  regular: 'fontWeightRegular',
  medium: 'fontWeightMedium',
  semibold: 'fontWeightSemibold',
  bold: 'fontWeightBold'
};

const spacingHorizontalMap: { [key: string]: string } = {
  none: 'spacingHorizontalNone',
  xxs: 'spacingHorizontalXXS',
  xs: 'spacingHorizontalXS',
  sNudge: 'spacingHorizontalSNudge',
  s: 'spacingHorizontalS',
  mNudge: 'spacingHorizontalMNudge',
  m: 'spacingHorizontalM',
  l: 'spacingHorizontalL',
  xl: 'spacingHorizontalXL',
  xxl: 'spacingHorizontalXXL',
  xxxl: 'spacingHorizontalXXXL'
};

const spacingVerticalMap: { [key: string]: string } = {
  none: 'spacingVerticalNone',
  xxs: 'spacingVerticalXXS',
  xs: 'spacingVerticalXS',
  sNudge: 'spacingVerticalSNudge',
  s: 'spacingVerticalS',
  mNudge: 'spacingVerticalMNudge',
  m: 'spacingVerticalM',
  l: 'spacingVerticalL',
  xl: 'spacingVerticalXL',
  xxl: 'spacingVerticalXXL',
  xxxl: 'spacingVerticalXXXL'
};

const shadowMap: { [key: string]: string } = {
  '2': 'shadow2',
  '4': 'shadow4',
  '8': 'shadow8',
  '16': 'shadow16',
  '28': 'shadow28',
  '64': 'shadow64',
  '2brand': 'shadow2Brand',
  '4brand': 'shadow4Brand',
  '8brand': 'shadow8Brand',
  '16brand': 'shadow16Brand',
  '28brand': 'shadow28Brand',
  '64brand': 'shadow64Brand'
};

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

function processKey(key: string, value: TokenValue, parentKey?: string): string {
  const pathParts = key.split('/');
  const lastPart = pathParts.pop() || key;
  
  // Border radius mapping
  if (key.includes('border') && key.includes('radius')) {
    return borderRadiusMap[lastPart] || `borderRadius${lastPart}`;
  }
  
  // Font related mappings
  if (key.includes('font')) {
    if (key.includes('size')) {
      return fontSizeMap[lastPart] || `fontSizeBase${lastPart}`;
    }
    if (key.includes('family')) {
      return 'fontFamilyBase';
    }
    if (key.includes('weight')) {
      return fontWeightMap[lastPart] || `fontWeight${lastPart}`;
    }
    if (key.includes('lineHeight')) {
      return lineHeightMap[lastPart] || `lineHeightBase${lastPart}`;
    }
  }
  
  // Spacing mappings
  if (key.includes('spacing')) {
    if (key.includes('horizontal')) {
      return spacingHorizontalMap[lastPart] || `spacingHorizontal${lastPart}`;
    }
    if (key.includes('vertical')) {
      return spacingVerticalMap[lastPart] || `spacingVertical${lastPart}`;
    }
  }
  
  // Shadow mapping
  if (key.includes('shadow')) {
    return shadowMap[lastPart] || `shadow${lastPart}`;
  }
  
  // Color mapping (preserving the format from the first document)
  if (value.type === 'color' || value.value.startsWith('#')) {
    const colorType = parentKey || lastPart;
    if (colorType.includes('background')) {
      return `colorNeutralBackground${capitalize(lastPart)}`;
    } else if (colorType.includes('foreground')) {
      return `colorNeutralForeground${capitalize(lastPart)}`;
    } else if (colorType.includes('subtle')) {
      return `colorSubtleBackground${capitalize(lastPart)}`;
    } else if (colorType.includes('transparent')) {
      return `colorTransparentBackground${capitalize(lastPart)}`;
    } else {
      return `color${capitalize(colorType)}${capitalize(lastPart)}`;
    }
  }
  
  return lastPart;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function flattenTokens(obj: TokenGroup, parentKey?: string): Record<string, string> {
  const flatten = (
    current: TokenGroup,
    result: Record<string, string> = {},
    parent?: string
  ): Record<string, string> => {
    Object.entries(current).forEach(([key, value]) => {
      if (isTokenValue(value)) {
        const processedKey = processKey(key, value, parent);
        result[processedKey] = value.value; // Preserve original values including '#' for colors
      } else if (isTokenGroup(value)) {
        flatten(value, result, key);
      }
    });
    return result;
  };

  return flatten(obj, {}, parentKey);
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
  if (!hex.startsWith('#')) return hex;
  
  const hexValue = hex.replace('#', '');
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  const a = hexValue.length === 8 ? parseInt(hexValue.substring(6, 8), 16) / 255 : 1;
  return \`rgba(\${r}, \${g}, \${b}, \${a})\`;
};

export const brandThemeTokens = Object.entries(brandTheme).reduce((acc, [key, value]) => {
  if (key.startsWith('color') && value.startsWith('#')) {
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