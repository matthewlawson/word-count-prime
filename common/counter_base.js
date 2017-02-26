class CounterBase {
    constructor () {
        this.wordMap = {};
    }

    logOutput() {
        for (var word in this.wordMap) {
            console.log(word + "\t[" + this.wordMap[word].count + "] \t[" + this.wordMap[word].prime + "]");
        }
    }
}

module.exports = CounterBase;