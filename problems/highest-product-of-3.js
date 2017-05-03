
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

//  take 1. - time: O(n)  |  space: O(1)
const highestProductOf3 = (arr) => {
  let high = Math.max(arr[0], arr[1])
  let low = Math.min(arr[0], arr[1])
  let highPair = high * low
  let lowPair = high * low
  let highestProduct = high * low * arr[2]
  for (let i = 2; i < arr.length; i++) {
    const item = arr[i]
    highestProduct = Math.max(highestProduct, item * highPair, item * lowPair)
    highPair = Math.max(highPair, item * high, item * low)
    lowPair = Math.min(lowPair, item * high, item * low)
    high = Math.max(high, item)
    low = Math.min(low, item)
  }
  return highestProduct
}

/*  ------------------------------------------------------  */

//  take 1. - time: O(n log(n))  |  space: O(1)
const highestProductOf3_2 = (arr) => {
  arr.sort((a,b) => b - a)
  const lowProduct = arr[arr.length - 1] * arr[arr.length - 2] * arr[0]
  const highProduct = arr[0] * arr[1] * arr[2]
  return Math.max(lowProduct, highProduct)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(highestProductOf3([1,2,3,4]), 24)
assert.equal(highestProductOf3([-4,2,3,1]), 6)
assert.equal(highestProductOf3([-4,-2,-3,1]), 12)
assert.equal(highestProductOf3([-10,-10,1,3,2]), 300)
assert.equal(highestProductOf3([-1,-3,-10,1,3,2]), 90)

assert.equal(highestProductOf3_2([1,2,3,4]), 24)
assert.equal(highestProductOf3_2([-4,2,3,1]), 6)
assert.equal(highestProductOf3_2([-4,-2,-3,1]), 12)
assert.equal(highestProductOf3_2([-10,-10,1,3,2]), 300)
assert.equal(highestProductOf3_2([-1,-3,-10,1,3,2]), 90)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
