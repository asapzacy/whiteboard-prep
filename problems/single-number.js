
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
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = [-1,-1,1]
const arr2 = [0,99,55,101,99,55,101]
const arr3 = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,7,8,9]
assert.equal(singleNumber(arr), 1)
assert.equal(singleNumber(arr2), 0)
assert.equal(singleNumber(arr3), 6)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
