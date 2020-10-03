
const fs = require('fs');


const HOST = process.env.HOST;

function getMapInput(fileName) {
    const path = `${HOST}/${fileName}`;
    return fs.readFileSync(path, 'utf-8');
}

function emitMapResult(key, value) {
    const path = `${HOST}/map-results/${key}.txt`;
    fs.appendFileSync(path, value + '\n');
}

function getReduceInputs() {
    const filenames = fs.readdirSync(`./map-results`);
    const inputs = [];
    for (const filename of filenames) {
        const key = filename.split('.')[0];
        inputs.push({ key, value: fs.readFileSync(`./map-results/${filename}`, 'utf-8') });
    }

    return inputs;
}


function emitReduceResult(key, value) {
    const path = `./reduce-results/results.txt`;
    fs.appendFileSync(path, key + ' ' + value + '\n');
}


module.exports.getMapInput = getMapInput;
module.exports.emitMapResult = emitMapResult;

module.exports.getReduceInputs = getReduceInputs;
module.exports.emitReduceResult = emitReduceResult;