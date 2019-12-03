module.exports = {
  automock: false,
  bail: false,
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['json'],
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['src/**/*.js'],
  transform: {},
}
