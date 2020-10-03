import * as pubSubSdk from './pubsub-sdk.js';


const TOPIC_ID = process.env.TOPIC_ID;

function displayMessage(message) {
    console.log(`> ${message.name}: ${message.text}`);
}

function streamMessages() {
    const socket = pubSubSdk.subscribe(TOPIC_ID);
    socket.on('message', (data) => {
        const message = JSON.parse(data);
        displayMessage(message);
    });
}

streamMessages();