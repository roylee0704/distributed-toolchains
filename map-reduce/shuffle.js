const fs = require('fs');

const HOSTS = process.env.HOST.split(',');

function shuffle() {
    for (const host of HOSTS) {
        const filenames = fs.readdirSync(`./${host}/map-results`);
        for (const filename of filenames) {
            const key = filename.split('.')[0];
            const content = fs.readFileSync(`./${host}/map-results/${key}.txt`, 'utf-8');
            fs.appendFileSync(`./map-results/${key}.txt`, content)
        }
    }
}

shuffle();