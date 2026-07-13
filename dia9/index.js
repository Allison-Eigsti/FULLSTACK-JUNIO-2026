const fs = require('node:fs')
const path = require('path')


// Write to a file
const content = 'Aquí está el contendio que estoy escribiendo!'

fs.writeFile('./data/writeTo.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('File written successfully!')   
})


// Read the file
fs.readFile('./data/writeTo.txt', 'utf8', (err, data) => {
    if (err) {
        console.err(err)
        return
    }
    console.log(data)
})


// Delete a file
fs.unlink('./data/writeTo.txt', err => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File deleted successfully!')
})


////////// Crear un stream
const files = [
    'text1.txt',
    'text2.txt',
    'text3.txt'
]

files.forEach(file => {
    const filePath = path.join(__dirname, 'data', file)

    console.log(`Leyendo el archivo: ${filePath}`)
    const readStream = fs.createReadStream(filePath, 'utf8')

    readStream.on('data', chunk => {
        console.log(`Chunk recibido: ${chunk}`)
    })

    readStream.on('end', () => {
        console.log(`Se terminó de leer el archivo: ${filePath}`)
    })

    readStream.on('error', err => {
        console.error(`Error al leer el archivo: ${filePath}`, err)
    })
})