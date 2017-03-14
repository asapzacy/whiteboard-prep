
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const isPowerOfThree = (x) => {
  console.log(x)
  if (x === 1) {
    return true
  }
  if (x === 0 || x % 3 > 0 ) {
    return false
  }
  return isPowerOfThree(x / 3)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(isPowerOfThree(0), false)
assert.equal(isPowerOfThree(1), true)
assert.equal(isPowerOfThree(27), true)
assert.equal(isPowerOfThree(45), false)
assert.equal(isPowerOfThree(243), true)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
