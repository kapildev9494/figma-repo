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
  [key: string]: TokenGroup | undefined;
}

interface ThemeTokens {
  'global/Value': GlobalValue;
  'Typography/Base': TypographyBase;
  'Theme/Light': ThemeColors;
  'Theme/Dark': ThemeColors;
  [key: string]: any;
}

function processThemeColors(themeColors: ThemeColors | undefined): Record<string, any> {
  if (!themeColors) {
    return {};
  }

  const result: Record<string, any> = {};
  
  Object.entries(themeColors).forEach(([category, tokens]) => {
    if (tokens) {
      result[category] = processTokenGroup(tokens);
    }
  });

  return result;
}

function processTokenGroup(group: TokenGroup): any {
  const result: any = {};
  
  Object.entries(group).forEach(([key, value]) => {
    if (isTokenValue(value)) {
      result[key] = {
        value: value.value,
        ...(value.type && { type: value.type }),
        ...(value.description && { description: value.description })
      };
    } else {
      result[key] = processTokenGroup(value);
    }
  });

  return result;
}

function isTokenValue(value: unknown): value is TokenValue {
  return Boolean(
    value &&
    typeof value === 'object' &&
    'value' in value &&
    typeof (value as TokenValue).value === 'string'
  );
}

function transformTokens(): void {
  try {
    const inputPath = path.join(process.cwd(), 'tokens', 'raw-themes.json');
    const outputPath = path.join(process.cwd(), 'tokens', 'themes.json');
    
    const tokens = JSON.parse(fs.readFileSync(inputPath, 'utf8')) as ThemeTokens;
    
    if (!tokens['global/Value'] || !tokens['Typography/Base']) {
      throw new Error('Required token groups are missing');
    }

    const processedTokens = {
      'global/Value': {
        borderRadius: processTokenGroup(tokens['global/Value'].borderRadius),
        strokeWidth: processTokenGroup(tokens['global/Value'].strokeWidth),
        spacingHorizontal: processTokenGroup(tokens['global/Value'].spacingHorizontal),
        spacingVertical: processTokenGroup(tokens['global/Value'].spacingVertical)
      },
      'Typography/Base': {
        fontSize: processTokenGroup(tokens['Typography/Base'].fontSize),
        lineHeight: processTokenGroup(tokens['Typography/Base'].lineHeight),
        fontFamily: processTokenGroup(tokens['Typography/Base'].fontFamily),
        fontWeight: processTokenGroup(tokens['Typography/Base'].fontWeight)
      },
      'Theme/Light': processThemeColors(tokens['Theme/Light']),
      'Theme/Dark': processThemeColors(tokens['Theme/Dark'])
    };

    fs.writeFileSync(outputPath, JSON.stringify(processedTokens, null, 2));
    console.log('Successfully transformed tokens and updated themes.json');
  } catch (error) {
    console.error('Error transforming tokens:', error);
    process.exit(1);
  }
}

transformTokens();