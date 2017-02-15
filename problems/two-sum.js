
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

const arr = [2,7,11,15]
const target = 9
assert.deepEqual(twoSum(arr, target), [0,1])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
