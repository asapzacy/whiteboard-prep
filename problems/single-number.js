
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const singleNumber = (arr) => {
  const obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1
  }
  for (let item in obj) {
    if (obj[item] === 1) {
      return Number(item)
    }
  }
  return
}

/*  ------------------------------------------------------  */

const singleNumber2 = (arr) => arr.reduce((a, b) => a ^ b)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = [0,1,0]
const arr2 = [1,2,3,1,2]
assert.equal(singleNumber(arr), 1)
assert.equal(singleNumber(arr2), 3)
assert.equal(singleNumber2(arr), 1)
assert.equal(singleNumber2(arr2), 3)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
