import axios from 'axios';
import WebSocket from 'ws';

export function publish(message, topicId) {
    console.log(`http://localhost:3001/${topicId}`, topicId);
    return axios.post(`http://localhost:3001/${topicId}`, message);
}

export function subscribe(topicId) {
    return new WebSocket(`ws://localhost:3001/${topicId}`);
}