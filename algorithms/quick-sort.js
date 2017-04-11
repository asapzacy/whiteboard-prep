
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const quickSort = (arr, left = 0, right = (arr.length - 1)) => {
  let index = partition(arr, left, right)
  if (left < index - 1) {
    quickSort(arr, left, index - 1)
  }
  if (right > index) {
    quickSort(arr, index, right)
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

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)]
  while (left <= right) {
    while (arr[left] < pivot) {
      left++
    }
    while (arr[right] > pivot) {
      right--
    }
    if (left <= right) {
      swap(arr, left, right)
      left++
      right--
    }
  }
  return left
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = [3,2,4,6,7,0,1,8,5,9]
assert.deepEqual(quickSort(arr), [0,1,2,3,4,5,6,7,8,9])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
