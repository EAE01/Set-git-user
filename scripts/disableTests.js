const { readFile, writeFile } = require('fs')
const path = require('path')

const packageJson = path.resolve(__dirname, '../package.json')

readFile(packageJson, (err, data) => {
  if(err) throw err

  const jsonData = JSON.parse(data)

  const index = jsonData.precommit.indexOf('test:commit')
  if(index >= 0) {
    jsonData.precommit.splice(index, 1)

    writeFile(packageJson, JSON.stringify(jsonData, null, 2), (err) => {
      if(err) throw err

      console.log('Disabled tests on precommit.')
    })
  } else {
    console.log('Tests are already disabled.')
  }
})
