
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const inerstionSortCount = (arr) => {
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j]
      j -= 1
      count += 1
    }
  }
  return count
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(inerstionSortCount([1,2,3,4,5]), 0)
assert.deepEqual(inerstionSortCount([5,4,3,2,1]), 10)
assert.deepEqual(inerstionSortCount([2,4,6,8,3]), 3)
assert.deepEqual(inerstionSortCount([2,3,4,5,6,7,8,9,10,1]), 9)
assert.deepEqual(inerstionSortCount([1,3,5,9,13,22,27,35,46,51,55,83,87,23]), 7)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
