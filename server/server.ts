import WebSocket from 'ws'

const server = new WebSocket.Server({port:5050})

server.on('connection', ws => {
    console.log('New client connected');

    ws.on("message", data => {
        console.log(`Client has sent ${data}`);

    })

    ws.on('close', () => {
    console.log('Client disconnected');

})

})



console.log('SERVER');


