const lib = require('../src/index')

describe('vue2-migration-helper', () => {
  test('should be defined', () => {
    expect(lib).toBeDefined()
    expect(lib).toBeInstanceOf(Function)
  })

  test('should be able to extract js ast from vue sfc', () => {
    expect(
      lib({
        path: './__tests__/text.vue',
      })
    ).toBeDefined()
  })
})
