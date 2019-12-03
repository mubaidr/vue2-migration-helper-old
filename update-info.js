const fs = require('fs')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const pkg = require('./package.json')
const inquirer = require('inquirer')

async function setup() {
  const { stdout } = await exec('git config --global --get user.email')
  const { stdout: gitName } = await exec('git config --global --get user.name')

  const gitEmail = stdout.trim()
  const gitUsername = gitEmail.split('@')[0]

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        default: 'myModule',
      },
      {
        type: 'input',
        name: 'description',
        default: 'My Module for Browsers and Node.js',
      },
      {
        type: 'input',
        name: 'keywords',
        default: 'browser, node, javascript',
      },
    ])
    .then(answers => {
      const name = answers.name.toLowerCase()
      const baseGitUrl = `https://github.com/${gitUsername}/${name}`

      pkg.author = `${gitName.trim()} <${gitEmail}>`
      pkg.name = name
      pkg.browser = `dist/${name}.min.js`
      pkg.description = answers.description
      pkg.keywords = answers.keywords.split(',')

      pkg.homepage = baseGitUrl
      pkg.bugs.url = `${baseGitUrl}/issues`
      pkg.repository.url = `git+${baseGitUrl}.git`

      // pkg.scripts.postinstall = 'npm run test'
      pkg.scripts.postinstall = ''

      // generate readme
      fs.writeFileSync('./README.md', `# ${name}\n\n${answers.description}`)

      // update package.json
      fs.writeFileSync('./package.json', JSON.stringify(pkg))

      // add initial test
      fs.writeFileSync(
        './__tests__/index.test.js',
        `const lib = require('../src/index')

describe('${name}', () => {
  test('should be defined', () => {
    expect(lib).toBeDefined()
    expect(lib).toBeInstanceOf(Function)
  })
})`
      )
    })
}

setup()
