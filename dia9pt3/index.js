const express = require('express')
const app = express()

const fs = require('node:fs')

app.use(express.json())


// Endpoint para mostrar el contenido de text1.txt
app.get('/text1', (req, res) => {
    fs.readFile('./data/text1.txt', 'utf8', (err, data) => {
        if (err) {
            console.err(err)
            return
        }
        console.log(data)
        res.send(data)
    })
})

// Endpoint para escribir un fichero con el dato pasado
app.post('/write', (req, res) => {
    const content = req.body.content

    fs.writeFile('./data/writeTo.txt', content, err => {
        if (err) {
            console.log(err)
            return
        }
        console.log(content)
        res.send(content)
    })
})

// Endpoint para eliminar el fichero writeTo.txt
app.delete('/delete', (req, res) => 
    {fs.unlink('./data/toDelete.txt', err => {
        if (err) {
            console.log(err)
            return
        }
        console.log('File deleted successfully!')
    })
})

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000')
})