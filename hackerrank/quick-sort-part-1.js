
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const quickSortP1 = (arr) => {
  const left = []
  const right = []
  const pivot = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (val > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [ ...left, val, ...right ]
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(quickSortP1([4,5,3,7,2]), [3,2,4,5,7])
assert.deepEqual(quickSortP1([3,2,1,4,5]), [2,1,3,4,5])
assert.deepEqual(quickSortP1([5,4,3,2,1]), [4,3,2,1,5])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
