module.exports = {
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/'],
  collectCoverageFrom: ['<rootDir>/**/*.js', '!/**/*.{stories,story}.js'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  moduleDirectories: ['node_modules', 'test'],
  coverageReporters: ['lcov', 'html'],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js']
}
