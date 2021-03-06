
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const diagonalDiff = (x, arr) => {
  let leftSum = 0
  let rightSum = 0
  for (let i = 0; i < x; i++) {
    leftSum += arr[i][i]
    rightSum += arr[i][x - (i + 1)]
  }
  return Math.abs(leftSum - rightSum)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(diagonalDiff(3,[[1,2,3],[4,5,6],[7,8,9]]), 0)
assert.equal(diagonalDiff(3, [[11,2,4],[4,5,6],[10,8,-12]]), 15)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
