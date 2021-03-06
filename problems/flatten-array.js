
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


//  take 1. - recursive solution
const flattenArray = (arr, result) => {
  result = result || []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (Array.isArray(item)) {
      flattenArray(item, result)
    } else {
      result.push(item)
    }
  }
  return result
}

/*  ------------------------------------------------------  */

//  take 2. - iterative solution
const flattenArray_2 = (arr) => {
  const result = []
  while (arr.length) {
    const item = arr.shift()
    if (Array.isArray(item)) {
      arr = [ ...item, ...arr ]
    } else {
      result.push(item)
    }
  }
  return result
}

/*  ------------------------------------------------------  */

//  take 3. - recursive solution #2
const flattenArray_3 = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (Array.isArray(item)) {
      result.push(...flattenArray_3(item))
    } else {
      result.push(item)
    }
  }
  return result
}

/*  ------------------------------------------------------  */

//  take 4. - recursive solution #3 (es6)
const flattenArray_4 = (arr) => arr.reduce(
  (a, b) =>  a.concat(Array.isArray(b) ? flattenArray_4(b) : b), []
)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepStrictEqual(flattenArray([[1],[2],[3],[4],[5]]), [1,2,3,4,5])
assert.deepStrictEqual(flattenArray([1,[2],[3,[4,[5]]]]), [1,2,3,4,5])
assert.deepStrictEqual(flattenArray([1,2,3,[4,5],[6,[7,8]]]), [1,2,3,4,5,6,7,8])

assert.deepStrictEqual(flattenArray_2([[1],[2],[3],[4],[5]]), [1,2,3,4,5])
assert.deepStrictEqual(flattenArray_2([1,[2],[3,[4,[5]]]]), [1,2,3,4,5])
assert.deepStrictEqual(flattenArray_2([1,2,3,[4,5],[6,[7,8]]]), [1,2,3,4,5,6,7,8])

assert.deepStrictEqual(flattenArray_3([[1],[2],[3],[4],[5]]), [1,2,3,4,5])
assert.deepStrictEqual(flattenArray_3([1,[2],[3,[4,[5]]]]), [1,2,3,4,5])
assert.deepStrictEqual(flattenArray_3([1,2,3,[4,5],[6,[7,8]]]), [1,2,3,4,5,6,7,8])

assert.deepStrictEqual(flattenArray_4([[1],[2],[3],[4],[5]]), [1,2,3,4,5])
assert.deepStrictEqual(flattenArray_4([1,[2],[3,[4,[5]]]]), [1,2,3,4,5])
assert.deepStrictEqual(flattenArray_4([1,2,3,[4,5],[6,[7,8]]]), [1,2,3,4,5,6,7,8])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
