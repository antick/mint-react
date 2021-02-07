module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react-images-upload).+\\.js$'
  ],
  coveragePathIgnorePatterns: ['node_modules', 'src/assets', '__tests__'],
  testPathIgnorePatterns: ['cypress'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
