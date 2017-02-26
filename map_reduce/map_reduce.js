/**
 * Implementation of a map redice problem
 * Can be more easily split across Cores / VM's
 * https://www.npmjs.com/package/mapred
 */
const CounterBase = require( '../common/counter_base');
class MapReduce extends CounterBase {
    constructor () {
        super();
    }

    start () {
        lw.load(function(words) {
            this.processWords(words);
            this.logOutput();
        }.bind(this));
    }

    processWords(words) {
        // TO DO...
        return this.wordMap;
    }
}

module.exports = new MapReduce();