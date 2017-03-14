
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const twoSum = (arr, target) => {
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    if (obj.hasOwnProperty(diff)) {
      return [ obj[diff], i ]
    }
    obj[arr[i]] = i
  }
  return false
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(twoSum([2,7,11,15], 9), [0,1])
assert.deepEqual(twoSum([1,2,3,4,5], 99), false)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
