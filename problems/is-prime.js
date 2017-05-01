
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const isPrime = (x) => {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false
    }
  }
  return x > 1
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(isPrime(0), false)
assert.equal(isPrime(4), false)
assert.equal(isPrime(7), true)
assert.equal(isPrime(13), true)
assert.equal(isPrime(99), false)
assert.equal(isPrime(137), true)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
