// scripts/transform-tokens.js
const fs = require('fs');
const path = require('path');

function transformTokens() {
  // Read the themes.json file
  const themesPath = path.join(__dirname, '../tokens/themes.json');
  const outputPath = path.join(__dirname, '../src/theme/theme.ts');
  
  const themeData = JSON.parse(fs.readFileSync(themesPath, 'utf8'));

  // Transform the token structure
  const brandTheme = {
    // Custom brand color palette
    'color-grey-12': themeData.colors.grey['12'].value,
    'color-brand-10': themeData.colors.brand['10'].value,
    'color-brand-60': themeData.colors.brand['60'].value,
    // ... map other color tokens
  };

  // Generate the TypeScript interface
  const themeInterface = generateThemeInterface(brandTheme);

  // Generate the final TypeScript file content
  const fileContent = `
import { Theme, themeToTokensObject } from '@fluentui/react-components';

${themeInterface}

export const brandTheme: Theme & BrandThemeExtension = {
${Object.entries(brandTheme)
  .map(([key, value]) => `  '${key}': '${value}'`)
  .join(',\n')}
};

export const brandThemeTokens = themeToTokensObject(brandTheme);

export const convertHexToRgba = (hex: string) => {
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
}

function generateThemeInterface(theme) {
  const properties = Object.keys(theme)
    .map(key => `  '${key}': string;`)
    .join('\n');

  return `
interface BrandThemeExtension {
${properties}
}`;
}

transformTokens();