const prime = require('../common/prime');
const expect = require('expect.js');

describe('Prime() tests', function() {
    describe('#isPrime()', function() {
        it('returns true for prime numbers', function() {
          var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,41,43,47];
          for (var primeNumber of primeNumbers) {
              expect(prime.isPrime(primeNumber)).to.be(true);
          }
        });

        it('returns false for non-prime numbers', function() {
            var primeNumbers = [4, 8, 9, 10, 12, 42, 100];
            for (var primeNumber of primeNumbers) {
                expect(prime.isPrime(primeNumber)).to.be(false);
            }
        });

        it('returns false for negative number', function() {
            expect(prime.isPrime(-4)).to.be(false);
        });

       
    });
});
