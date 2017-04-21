
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const permutations = (arr) => {
  let result = []
  const permute = (arr, mem = []) => {
    for (let i = 0; i < arr.length; i++) {
      let current = arr.splice(i, 1)
      if (!arr.length) {
        result.push(mem.concat(current))
      }
      permute([ ...arr ], mem.concat(current))
      arr.splice(i, 0, current[0])
    }
    return result
  }
  return permute(arr)
}

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(permutations([1,2,3]), [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
