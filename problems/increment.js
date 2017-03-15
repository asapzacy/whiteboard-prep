
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const increment = (arr) => {
  if (!arr.length) {
    return -1
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      arr[i] = 0
    } else {
      arr[i] = arr[i] + 1
      return arr
    }
  }
  arr.unshift(1)
  return arr
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(increment([]), -1)
assert.deepEqual(increment([0]), [1])
assert.deepEqual(increment([1,2,3]), [1,2,4])
assert.deepEqual(increment([7,0,9]), [7,1,0])
assert.deepEqual(increment([9,9,9]), [1,0,0,0])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
