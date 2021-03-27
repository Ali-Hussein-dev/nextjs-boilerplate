module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    'src/(.*)': '<rootDir>/src/$1',
    '@/pages/(.*)': '<rootDir>/src/pages/$1',
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/tests/(.*)': '<rootDir>/src/tests/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
