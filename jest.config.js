module.exports = {
    transform: {     "^.+\\.(ts|js)x?$": "ts-jest"   },
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };
  