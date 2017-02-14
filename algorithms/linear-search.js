
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i
    }
  }
  return -1
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = ['a','b','c','d','e','f','g','h','i','j']
assert.equal(linearSearch(arr, ''), -1)
assert.equal(linearSearch(arr, 'a'), 0)
assert.equal(linearSearch(arr, 'b'), 1)
assert.equal(linearSearch(arr, 'c'), 2)
assert.equal(linearSearch(arr, 'd'), 3)
assert.equal(linearSearch(arr, 'e'), 4)
assert.equal(linearSearch(arr, 'f'), 5)
assert.equal(linearSearch(arr, 'g'), 6)
assert.equal(linearSearch(arr, 'h'), 7)
assert.equal(linearSearch(arr, 'i'), 8)
assert.equal(linearSearch(arr, 'j'), 9)
assert.equal(linearSearch(arr, 'k'), -1)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
