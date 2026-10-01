const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
    console.log('New client connected')

    ws.on('message', (message) => {
        console.log(message)
        const text = message.toString()
        const data = JSON.parse(text)
        console.log('Message recieved:', data)
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ user: data.user, message: data.message }))
            }
        })
    })

    ws.on('close', () => {
        console.log('client disconnected')
    })
})

console.log('WebSocket server running on ws://localhost:8080')