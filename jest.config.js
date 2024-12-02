module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/src/e2e/', '<rootDir>/.*/__mocks__'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^\\.vocab/index$': '<rootDir>/.vocab/index.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
