const http = require('http')

const fs = require('fs')

const path = require('path')
const uuidv1 = require('uuid/v1')

const downloadPage = (url='http://nodeprogram.com') => {
  console.log('downloading', url)

  const fetchPage =(urlF, callback) => {
    http.get(urlF, (response) => {
      let buff = ''
      response.on('data', (chunks) => {
        buff += chunks

      })
      response.on('end',() => {
        callback(null, buff)

      })
    }).on('error', (error) => {
      console.error(`Got error:${error.message}`)
      callback(erorr)
    })
  }

const FolderName = uuidv1()

fs.mkdirSync(FolderName)

fetchPage(url, (error, data)=>{
  if (error) return console.log(error)
  fs.writeFileSync(path.join(__dirname,FolderName, 'url' ), url)
  fs.writeFileSync(path.join(__dirname,FolderName,  'file.html'), data)
  console.log('downloading is done in folder', FolderName)
})
}


downloadPage(process.argv[2])
