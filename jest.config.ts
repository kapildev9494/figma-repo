module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
};
