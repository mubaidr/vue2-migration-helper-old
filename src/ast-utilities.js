const babelParser = require('@babel/parser')

async function getAst(source) {
  console.log(babelParser.parse('const u = 1;'), source)
  const ast = babelParser.parse(source, {
    sourceType: 'module',
    plugins: [
      'typescript',
      'dynamicImport',
      'objectRestSpread',
      'logicalAssignment',
      'estree',
    ],
  })

  return ast
}

module.exports = {
  getAst,
}
