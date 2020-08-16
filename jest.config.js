module.exports = {
  coveragePathIgnorePatterns: ['node_modules', 'src/assets', '__tests__'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
};
