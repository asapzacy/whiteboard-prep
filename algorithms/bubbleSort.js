
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr.length - i; j >= 0; j--) {
      if (arr[j] < arr[j - 1] )
      swap(arr, j, j-1)
    }
  }
  return arr
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

/*  ------------------------------------------------------  */

const sorted = [0,1,2,3,4,5,6,7,8,9]
const arr = [3,2,4,6,7,0,1,8,5,9]
assert.deepEqual(bubbleSort(arr), sorted)
const arr2 = [9,0,7,3,5,4,6,1,2,8]
assert.deepEqual(bubbleSort(arr), sorted)
const arr3 = [8,5,4,1,3,2,9,7,0,6]
assert.deepEqual(bubbleSort(arr), sorted)
const arr4 = [4,6,9,8,0,5,2,1,7,3]
assert.deepEqual(bubbleSort(arr), sorted)
const arr5 = [9,4,5,0,8,1,2,7,3,6]
assert.deepEqual(bubbleSort(arr), sorted)
g

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
