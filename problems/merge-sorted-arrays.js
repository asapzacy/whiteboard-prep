
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const mergeSortedArrays = (arr, arr2) => {
  const result = []
  while (arr.length && arr2.length) {
    if (arr[0] < arr2[0]) {
      result.push(arr.shift())
    } else {
      result.push(arr2.shift())
    }
  }
  return result.concat(arr).concat(arr2)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(mergeSortedArrays([1,3,5], [2,4]), [1,2,3,4,5])
assert.deepEqual(mergeSortedArrays([1,3,5,7,9], [0,2,4,6,8]), [0,1,2,3,4,5,6,7,8,9])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
