
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const quickSortP2 = (arr) => {
  let left = []
  let right = []
  const val = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (val > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  if (left.length > 1) {
    left = quickSortP2(left)
  }
  if (right.length > 1) {
    right = quickSortP2(right)
  }
  const merged = [ ...left, val, ...right ]
  return merged
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(quickSortP2([5,8,1,3,7,9,2]), [1,2,3,5,7,8,9])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
