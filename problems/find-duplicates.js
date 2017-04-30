
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const findDuplicates = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (arr.indexOf(item, i + 1) >= 0) {
      if (!result.includes(item)) {
        result.push(item)
      }
    }
  }
  return result
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(findDuplicates([]), [])
assert.deepEqual(findDuplicates([1,1,1]), [1])
assert.deepEqual(findDuplicates([1,2,3,1,2,1]), [1,2])
assert.deepEqual(findDuplicates([1,1,1,2,3,3,3,4,5]), [1,3])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
