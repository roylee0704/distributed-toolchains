const fs = require('fs');

const HOST = process.env.HOST;

const path = `./${HOST}/latencies.txt`;
var stream = fs.createWriteStream(`./${HOST}/latencies.txt`, { flags: 'w' });


console.log(new Date().toISOString());
console.log(`generating latencies file to ${path}...`);

const min = 5000;
const max = 30000;
[...Array(10000)].forEach(function () {
    const latency = min + Math.floor(Math.random() * (max - min));

    stream.write(latency + "\n");
});
console.log(new Date().toISOString());
stream.end();
