
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

//  only buy and sell if you can make a positive profit
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

//  forced to buy and sell at least once (can return a negative profit)
const maxProfit2 = (arr) => {
  let buyPrice = arr[0]
  let maxProfit = arr[1] - buyPrice
  for (let i = 1; i < arr.length; i++) {
    const currentPrice = arr[i]
    const potentialProfit = currentPrice - buyPrice
    maxProfit = Math.max(maxProfit, potentialProfit)
    buyPrice = Math.min(buyPrice, currentPrice)
  }
  return maxProfit
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(maxProfit([7,1,5,3,6,4]), 5)
assert.equal(maxProfit([9,7,5,3,1]), 0)           //  positive profit
assert.equal(maxProfit([10,7,5,8,11,9]), 6)
assert.equal(maxProfit2([7,1,5,3,6,4]), 5)
assert.equal(maxProfit2([9,7,5,3,1]), -2)         //  negative profit
assert.equal(maxProfit2([10,7,5,8,11,9]), 6)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
