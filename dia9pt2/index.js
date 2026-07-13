const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('hola, mundo')
    res.end()
})

server.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000')
})