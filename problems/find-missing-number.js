
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const findMissingNumber = (arr) => {
  const high = Math.max(...arr)
  const low = Math.min(...arr)
  const sum = arr.reduce((a,b) => a + b, 0)
  const highSum = (high * (high + 1)) / 2
  const lowSum = (low * (low - 1)) / 2
  return (highSum - lowSum) - sum
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(findMissingNumber([5,4,3,1,0]), 2)
assert.equal(findMissingNumber([8,6,4,2,9,7,3,1]), 5)
assert.equal(findMissingNumber([2,5,1,4,9,6,3,7]), 8)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
