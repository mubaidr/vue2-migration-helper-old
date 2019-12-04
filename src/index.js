const { name } = require('../package.json')
const { getTemplate } = require('./template-utilities')
const { getAst } = require('./ast-utilities')
const traverse = require('@babel/traverse').default
// const generator = require('@babel/generator')
// const helpers = require('@babel/helpers')

// TODO: add reactive properties definitions
// TODO: convert computed syntax
// TODO: convert watch syntax
// TODO: convert methods syntax
// TODO: convert life-cycle hooks
// TODO: convert props syntax
// TODO: update this.$event usage

async function myModule(options) {
  const template = await getTemplate(options.path)
  const ast = await getAst(template.script)

  traverse(ast, {
    enter(path) {
      const { name, type } = path.node

      console.log(path, name, type)
    },
  })

  return ast
}

if (module && module.exports) {
  module.exports = myModule
} else {
  global[name] = myModule
}

// debug code
myModule({
  path: './__tests__/text.vue',
})
