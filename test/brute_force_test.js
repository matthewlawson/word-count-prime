const bruteForce = require ('../brute_force/brute_force')
const expect = require('expect.js');

describe('BruteForce() tests', function() {
    var words = ["apples", "apples", "apples","apples", "bannanas", "pears", "apple", "chocolate","chocolate"]
    var wordMap;
    describe('#processWords()', function() {
        it('produces a object', function(){
            wordMap = bruteForce.processWords(words);
            expect(wordMap).to.be.an('object');
        });

        it('reduces to unique words', function() {
            expect(Object.keys(wordMap).length).to.be(5);
        });

        it('has count for each word', function(){
            for(var word in wordMap) {
                expect(wordMap[word].count).to.be.a('number');
                expect(wordMap[word].prime).to.be.a('boolean');
            }
        });

        it('has only correct keys', function() {
            expect(wordMap).to.only.have.keys('apples', 'bannanas', 'pears', 'apple', 'chocolate');
        });

        it('has correct counts', function() {
            expect(wordMap['apples'].count).to.be(4);
            expect(wordMap['bannanas'].count).to.be(1);
            expect(wordMap['pears'].count).to.be(1);
            expect(wordMap['apple'].count).to.be(1);
            expect(wordMap['chocolate'].count).to.be(2);
        });

        it('has correct primes', function() {
            expect(wordMap['apples'].prime).to.be(false);
            expect(wordMap['bannanas'].prime).to.be(true);
            expect(wordMap['pears'].prime).to.be(true);
            expect(wordMap['apple'].prime).to.be(true);
            expect(wordMap['chocolate'].prime).to.be(true);
        });
    });
});
