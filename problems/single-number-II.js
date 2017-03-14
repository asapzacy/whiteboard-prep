
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const singleNumberII = (arr) => {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    obj[item] = (obj[item] || 3) - 1
    if (obj[item] === 0) {
      delete obj[item]
    }
  }
  for (let key in obj) {
    return Number(key)
  }
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = [0,1,0]
const arr2 = [1,2,3,1,2]
assert.equal(singleNumberII([0,1,0,0]), 1)
assert.equal(singleNumberII([1,2,3,1,3,1,3]), 2)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
