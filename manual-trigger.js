const https = require('https');

const owner = 'kapildev9494';
const repo = 'new_repo';
const event_type = 'design-tokens-updated';
const token = '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';

const data = JSON.stringify({
  event_type: event_type,
  client_payload: {
    // Add some dummy token data here
    global: {
      color: {
        primary: '#FF0000'
      }
    }
  }
});

const options = {
  hostname: 'api.github.com',
  port: 443,
  path: `/repos/${owner}/${repo}/dispatches`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Node.js',
    'Authorization': `Bearer ${token}`
  }
};

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();