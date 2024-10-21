import * as fs from 'fs';
import * as path from 'path';

interface TokenValue {
  value: string | number;
}

interface TokenGroup {
  [key: string]: TokenValue | TokenGroup;
}

function isTokenValue(value: unknown): value is TokenValue {
  return Boolean(
    value &&
    typeof value === 'object' &&
    'value' in value &&
    (typeof (value as TokenValue).value === 'string' || typeof (value as TokenValue).value === 'number')
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
    const newKey = prefix ? `${prefix}${key.charAt(0).toUpperCase()}${key.slice(1)}` : key;
    
    if (isTokenValue(value)) {
      acc[newKey] = value.value.toString();
    } else if (isTokenGroup(value)) {
      Object.assign(acc, flattenTokens(value, newKey));
    }
    
    return acc;
  }, {});
}

function generateThemeInterface(tokens: Record<string, string>): string {
  const properties = Object.keys(tokens).map(key => `  ${key}: string;`);
  return `interface FluentUITheme {
${properties.join('\n')}
}`;
}

function transformTokens(): void {
  try {
    const inputPath = path.join(process.cwd(), 'input', 'fluent-tokens.json');
    const outputPath = path.join(process.cwd(), 'src', 'theme', 'theme.ts');
    
    const tokenData = JSON.parse(fs.readFileSync(inputPath, 'utf8')) as TokenGroup;
    const flatTokens = flattenTokens(tokenData);
    const themeInterface = generateThemeInterface(flatTokens);
    
    const fileContent = `${themeInterface}

export const fluentTheme: FluentUITheme = {
${Object.entries(flatTokens)
  .map(([key, value]) => `  ${key}: '${value}'`)
  .join(',\n')}
};

export default fluentTheme;
`;

    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, fileContent);
    console.log('Successfully transformed Fluent UI 9 tokens and updated theme.ts');
  } catch (error) {
    console.error('Error transforming tokens:', error);
    process.exit(1);
  }
}

transformTokens();