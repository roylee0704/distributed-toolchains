import { publish } from './pubsub-sdk.js';
import readline from 'readline';

const NAME = process.env.NAME;
const TOPIC_ID = process.env.TOPIC_ID;

const terminal = readline.createInterface({
    input: process.stdin,
});

terminal.on('line', text => {
    const message = { name: NAME, text };
    publish(message, TOPIC_ID);
});