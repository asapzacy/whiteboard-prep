
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const quickSortIp = (arr, left, right) => {
  left = left === undefined ? 0 : left
  right = right === undefined ? arr.length - 1 : right
  if (left < right) {
    const pivotVal = arr[right]
    let swapIndex = left
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotVal) {
        swap(arr, i, swapIndex)
        swapIndex += 1
      }
    }
    swap(arr, swapIndex, right)
    quickSortIp(arr, left, swapIndex - 1)
    quickSortIp(arr, swapIndex + 1, right)
    return arr
  }
}

/*  ------------------------------------------------------  */

const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(quickSortIp([5,4,3,2,1]), [1,2,3,4,5])
assert.deepEqual(quickSortIp([5,8,1,3,7,9,2],0,6), [1,2,3,5,7,8,9])
assert.deepEqual(quickSortIp([1,3,9,8,2,7,5],0,6), [1,2,3,5,7,8,9])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
