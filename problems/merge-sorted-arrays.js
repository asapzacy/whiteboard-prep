
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

const arr = [1,3,5,7,9]
const arr2 = [0,2,4,6,8]
assert.deepEqual(mergeSortedArrays(arr, arr2), [0,1,2,3,4,5,6,7,8,9])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
