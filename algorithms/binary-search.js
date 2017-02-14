
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const binarySearch = (arr, target) => {
  let start = 0
  let stop = arr.length - 1
  let middle = Math.floor((start + stop) / 2)
  while (arr[middle] !== target && start < stop) {
    if (target < arr[middle]) {
      stop = middle - 1
    } else if (target > arr[middle]) {
      start = middle + 1
    }
    middle = Math.floor((start + stop) / 2)
  }
  return arr[middle] === target ? middle : -1
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = ['a','b','c','d','e','f','g','h','i','j']
assert.equal(binarySearch(arr, 'a'), 0)
assert.equal(binarySearch(arr, 'b'), 1)
assert.equal(binarySearch(arr, 'c'), 2)
assert.equal(binarySearch(arr, 'd'), 3)
assert.equal(binarySearch(arr, 'e'), 4)
assert.equal(binarySearch(arr, 'f'), 5)
assert.equal(binarySearch(arr, 'g'), 6)
assert.equal(binarySearch(arr, 'h'), 7)
assert.equal(binarySearch(arr, 'i'), 8)
assert.equal(binarySearch(arr, 'j'), 9)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
