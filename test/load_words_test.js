const lw = require('../common/load_words');
const expect = require('expect.js');

describe('LoadWords() tests', function() {
    describe('#load()', function() {
        it('array of words are returned..', function(done) {
            lw.load(function(words) {
                expect(words).to.be.an('array');
                expect(words).to.not.be.empty();
                //Pick the first word does it have a size ...
                expect(words[0].length).to.be.greaterThan(0)
                done();
            });
        });
    });

    describe('#sanitize()', function() {
        //Test sanitizer is stripping punctuation.
    });
});
