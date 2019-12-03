const pck = require('../package.json')

async function myModule(options) {
  console.log('myModule called with options:', options)
}

if (module && module.exports) {
  module.exports = myModule
} else {
  global[pck.name] = myModule
}
