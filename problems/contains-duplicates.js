
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const containsDuplicates = (arr) => {
  const s = new Set()
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (s.has(item)) {
      return true
    }
    s.add(item)
  }
  return false
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(containsDuplicates([]), false)
assert.equal(containsDuplicates([1,2,3]), false)
assert.equal(containsDuplicates([1,2,3,1]), true)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
