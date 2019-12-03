const lib = require('../src/index')

describe('vue2-migration-helper', () => {
  test('should be defined', () => {
    expect(lib).toBeDefined()
    expect(lib).toBeInstanceOf(Function)
  })
})