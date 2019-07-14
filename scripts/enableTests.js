const { readFile, writeFile } = require('fs')
const path = require('path')

const packageJson = path.resolve(__dirname, '../package.json')

readFile(packageJson, (err, data) => {
  if(err) throw err

  const jsonData = JSON.parse(data)

  if(jsonData.precommit.indexOf('test:commit') < 0){
    jsonData.precommit.splice(1, 0, 'test:commit')

    writeFile(packageJson, JSON.stringify(jsonData, null, 2), (err) => {
      if(err) throw err

      console.log('Tests are now enabled on precommit.')
    })
  } else {
    console.log('Tests are already enabled.')
  }
})
