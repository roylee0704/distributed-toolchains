const mapReduce = require('./map-reduce');


function reduce(keyValuePairs) {



    keyValuePairs.forEach(kvp => {
        const value = [...kvp.value.split('\n').filter(v => !!v)].reduce((sum, v) => sum + +v, 0)
        mapReduce.emitReduceResult(kvp.key, value);
    });

}




const reduceInputs = mapReduce.getReduceInputs();
reduce(reduceInputs);