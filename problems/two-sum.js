
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


//  O(1) space - O(n) time
const twoSum = (arr, target) => {
  const hash = {}
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    if (hash.hasOwnProperty(diff)) {
      return [ hash[diff], i ]
    }
    hash[arr[i]] = i
  }
  return -1
}

/*  ------------------------------------------------------  */

//  no extra space - but O(n^2) time
const twoSum_2 = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === diff) {
        return [i, j]
      }
    }
  }
  return -1
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(twoSum([2,7,11,15], 9), [0,1])
assert.deepEqual(twoSum([1,2,3,4,5], 99), -1)

assert.deepEqual(twoSum_2([2,7,11,15], 9), [0,1])
assert.deepEqual(twoSum_2([1,2,3,4,5], 99), -1)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
