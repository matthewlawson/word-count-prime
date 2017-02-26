"use strict";
/** 
 * The brute force solution ...
 */
const CounterBase = require( '../common/counter_base');
const lw = require('../common/load_words');
const prime = require('../common/prime');

class BruteForce extends CounterBase {
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
        //Accepts array of words
        //Returns map of word => {count: (int) how many times the word appears in array, prime (bool) is the count a prime number}
        //Process into map and count / is prime ...
        for (var word of words) { //O(a)
            if(this.wordMap[word]) {
                this.wordMap[word].count ++;
            }
            else {
                this.wordMap[word] = {count: 1} 
            }
        }
        //Loop over word map and calculate is the word count is prime ..
        for(var word in this.wordMap) { //O(b)
            this.wordMap[word].prime = prime.isPrime(this.wordMap[word].count);
        }
        //O(a+b)
        return this.wordMap;
    }
}

module.exports = new BruteForce();