// const lib = require('../src/index')
const fs = require('fs')
const { Parser: JsParser } = require('acorn')
const xml2js = require('xml2js')
// const xml = require('xml')

// TODO: add reactive properties definitions
// TODO: convert computed syntax
// TODO: convert watch syntax
// TODO: convert methods syntax
// TODO: convert life-cycle hooks
// TODO: convert props syntax

// Read vue file content
const source = fs.readFileSync('./__tests__/text.vue', 'utf-8')

xml2js.parseStringPromise(`<root>${source}</root>`).then(template => {
  const ast = JsParser.parse(template.root.script, {
    ecmaVersion: 11,
    sourceType: 'module',
    // locations: true,
    // ranges: true,
    // sourceFile: true,
  })

  const sections = Object.values(ast.body[0].declaration.properties)

  sections.forEach(section => {
    const { key, value } = section
    const { name } = key
    console.log(name, key, value)
  })
})

// describe('vue2-migration-helper', () => {
//   test('should be defined', () => {
//     expect(lib).toBeDefined()
//     expect(lib).toBeInstanceOf(Function)
//   })
// })
