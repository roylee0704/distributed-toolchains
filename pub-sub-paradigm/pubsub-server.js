import express from 'express';
const appBase = express();

import expressWs from 'express-ws';
const wsInstance = expressWs(appBase);

let { app } = wsInstance; // let app = wsInstance.app;

app.use(express.json());


app.listen(3001, () => {
    console.log('Listening on port 3001...');
});

const subscribers = {};
app.post('/:topicId', (req, res) => {
    const { topicId } = req.params;
    const message = req.body;
    console.log(topicId)
    const sockets = subscribers[topicId] || [];

    for (let socket of sockets) {
        socket.send(JSON.stringify(message));
    }
});

app.ws('/:topicId', (socket, req) => {
    const { topicId } = req.params;

    if (!subscribers[topicId]) {
        subscribers[topicId] = [];
    }

    const sockets = subscribers[topicId];

    sockets.push(socket);
    socket.on('close', () => {
        console.log(`one subscriber on topic: ${topicId} is leaving...`);
        sockets.splice(sockets.indexOf(socket), 1);
    });
});
