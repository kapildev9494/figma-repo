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

interface ThemeTokens {
  'global/Value': {
    borderRadius: { [key: string]: TokenValue };
    strokeWidth: { [key: string]: TokenValue };
    spacingHorizontal: { [key: string]: TokenValue };
    spacingVertical: { [key: string]: TokenValue };
  };
  'Typography/Base': {
    fontSize: { [key: string]: TokenValue };
    lineHeight: { [key: string]: TokenValue };
    fontFamily: { [key: string]: TokenValue };
    fontWeight: { [key: string]: TokenValue };
  };
  'Theme/Light': TokenGroup;
  'Theme/Dark': TokenGroup;
  [key: string]: any;
}

function isTokenValue(value: any): value is TokenValue {
  return value && typeof value === 'object' && 'value' in value && typeof value.value === 'string';
}

function processTokens(tokens: any, maxDepth: number = 10, currentDepth: number = 0): any {
  // Base case: if we've reached max depth or the input isn't an object
  if (currentDepth >= maxDepth || !tokens || typeof tokens !== 'object') {
    return tokens;
  }

  // Handle array case
  if (Array.isArray(tokens)) {
    return tokens.map(item => processTokens(item, maxDepth, currentDepth + 1));
  }

  // Handle token value case
  if (isTokenValue(tokens)) {
    return {
      value: tokens.value,
      ...(tokens.type && { type: tokens.type }),
      ...(tokens.description && { description: tokens.description })
    };
  }

  // Handle object case
  const processed: any = {};
  for (const [key, value] of Object.entries(tokens)) {
    processed[key] = processTokens(value, maxDepth, currentDepth + 1);
  }
  return processed;
}

function transformTokens(): void {
  try {
    // Read input file
    const inputPath = path.join(process.cwd(), 'tokens', 'raw-themes.json');
    const outputPath = path.join(process.cwd(), 'tokens', 'themes.json');
    
    console.log('Reading from:', inputPath);
    const rawData = fs.readFileSync(inputPath, 'utf8');
    const tokens: ThemeTokens = JSON.parse(rawData);

    // Validate required token groups
    if (!tokens['global/Value'] || !tokens['Typography/Base']) {
      throw new Error('Required token groups are missing');
    }

    // Process tokens with depth limit
    const processedTokens = {
      'global/Value': processTokens(tokens['global/Value']),
      'Typography/Base': processTokens(tokens['Typography/Base']),
      'Theme/Light': processTokens(tokens['Theme/Light']),
      'Theme/Dark': processTokens(tokens['Theme/Dark'])
    };

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write processed tokens
    console.log('Writing to:', outputPath);
    fs.writeFileSync(outputPath, JSON.stringify(processedTokens, null, 2));
    console.log('Successfully transformed tokens and updated themes.json');
  } catch (error) {
    console.error('Error transforming tokens:', error);
    if (error instanceof Error) {
      console.error('Error details:', error.message);
      console.error('Stack trace:', error.stack);
    }
    process.exit(1);
  }
}

transformTokens();