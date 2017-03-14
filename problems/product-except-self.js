
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const productExceptSelf = (arr) => {
  const result = Array(arr.length).fill(1)
  let left = 1
  let right = 1
  for (let i = 0; i < arr.length - 1; i++) {
    left *= arr[i]
    right *= arr[arr.length - 1 - i]
    result[i + 1] *= left
    result[arr.length - 2 - i] *= right
  }
  return result
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(productExceptSelf([0,0]), [0,0])
assert.deepEqual(productExceptSelf([1,2,3,4]), [24,12,8,6])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
