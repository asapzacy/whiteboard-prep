
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

//  take 1. - extra space (array)
const dedupeArray = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (!result.includes(item)) {
      result.push(item)
    }
  }
  return result
}

/*  ------------------------------------------------------  */

const dedupeArray_2 = (arr) => {
  const hash = {}
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (!hash[item]) {
      hash[item] = true
    }
  }
  return Object.keys(hash).map(Number)
}

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepStrictEqual(dedupeArray([]), [])
assert.deepStrictEqual(dedupeArray([1,1,1]), [1])
assert.deepStrictEqual(dedupeArray([1,2,3,1,2]), [1,2,3])

assert.deepStrictEqual(dedupeArray_2([]), [])
assert.deepStrictEqual(dedupeArray_2([1,1,1]), [1])
assert.deepStrictEqual(dedupeArray_2([1,2,3,1,2]), [1,2,3])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
