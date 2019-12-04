const fs = require('fs')
const xml2js = require('xml2js')

async function getTemplate(path) {
  const source = fs.readFileSync(path, 'utf-8')
  const template = await xml2js.parseStringPromise(`<root>${source}</root>`)

  template.root.script = template.root.script.join('')

  return template.root
}

module.exports = { getTemplate }
