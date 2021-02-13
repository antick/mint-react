module.exports = {
  coveragePathIgnorePatterns: ['node_modules', 'src/assets', '__tests__'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  coverageThreshold: {
    global: {
      statements: 57.51,
      branches: 49.36,
      functions: 44.37,
      lines: 58.07
    }
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['cypress'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!react-images-upload).+\\.js$'
  ]
};
