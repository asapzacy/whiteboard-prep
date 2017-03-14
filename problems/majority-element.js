
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const majorityElement = (arr) => {
  const obj = {}
  const half = Math.floor(arr.length / 2)
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    obj[item] = (obj[item] || 0) + 1
    if (obj[item] > half) {
      return item
    }
  }
  return -1
}

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(majorityElement([]), -1)
assert.equal(majorityElement([1]), 1)
assert.equal(majorityElement([1,2,1]), 1)
assert.equal(majorityElement([1,2,3,1,1]), 1)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
