
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const maxProfit = (arr) => {
  let max = 0
  let min = arr[0]
  let diff = 0
  for (let i = 0; i < arr.length; i++) {
    const price = arr[i]
    min = min > price ? price : min
    diff = price - min
    max = diff > max ? diff : max
  }
  return max
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(maxProfit([7,1,5,3,6,4]), 5)
assert.equal(maxProfit([7,6,4,3,1]), 0)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
