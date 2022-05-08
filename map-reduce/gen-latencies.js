const fs = require("fs");

const HOST = process.env.HOST;
const N = +process.env.N || 10000;
const path = `./${HOST}/latencies.txt`;
var stream = fs.createWriteStream(`./${HOST}/latencies.txt`, { flags: "w" });

console.log(`generating ${N} latencies to ${path}...`);

const min = 5000;
const max = 30000;
[...Array(N)].forEach(function () {
  const latency = min + Math.floor(Math.random() * (max - min));

  stream.write(latency + "\n");
});
stream.end();
