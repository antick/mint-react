module.exports = {
  coveragePathIgnorePatterns: ['node_modules', 'src/assets', '__tests__'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
