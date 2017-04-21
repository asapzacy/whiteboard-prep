
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const maxSubarray = (arr) => {
  let result = arr[0]
  let highest = arr[0]
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i]
    highest = Math.max(val, highest + val)
    result = Math.max(highest, result)
  }
  return result
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(maxSubarray([-9]), -9)
assert.deepEqual(maxSubarray([-9,9]), 9)
assert.deepEqual(maxSubarray([1,2,-3,-4,5,6,7]), 18)
assert.deepEqual(maxSubarray([-2,-1,-3,4,-1,2,1,-5,4]), 6)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
