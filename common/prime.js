/**
 * isPrime(int) determines if a number is prime or not.
 * 
 * "a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11)."
 */
class Prime {
    constructor () {
        //map of key => bool, key = integer being tested, bool = is integer prime.
        //Used for efficiency so each unique integer is only computed once per execution.
        this.primesMap = {};
    }

    isPrime(testNumber) {
        if(testNumber < 0) {
            //Always false - so dont check map...
            return false;
        }
        if(this.primesMap[testNumber]) {
            return this.primesMap[testNumber];
        }
        else {
            for (var i = 2; i <= Math.sqrt(testNumber); i++)
            {
                if ((testNumber % i) == 0)
                {
                    this.primesMap[testNumber] = false;
                    return false;
                }
            }
            this.primesMap[testNumber] = true;
            return true;
        }
    }
}

module.exports = new Prime();