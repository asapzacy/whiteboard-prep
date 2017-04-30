
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const incrementArray = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      arr[i] = 0
    } else {
      arr[i] += 1
      return arr
    }
  }
  return [ 1, ...arr ]
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(incrementArray([0]), [1])
assert.deepEqual(incrementArray([9]), [1,0])
assert.deepEqual(incrementArray([1,2,3]), [1,2,4])
assert.deepEqual(incrementArray([7,0,9]), [7,1,0])
assert.deepEqual(incrementArray([9,9,9]), [1,0,0,0])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
