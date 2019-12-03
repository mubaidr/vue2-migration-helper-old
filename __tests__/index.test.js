const lib = require('../src/index')

describe('mymodule', () => {
  test('should be defined', () => {
    expect(lib).toBeDefined()
    expect(lib).toBeInstanceOf(Function)
  })
})