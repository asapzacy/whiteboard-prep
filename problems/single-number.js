
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

const singleNumber_2 = (arr) => arr.reduce((a, b) => a ^ b)

/*  ------------------------------------------------------  */

const singleNumber_3 = (arr) => {
  const sorted = arr.sort((a, b) => a - b)
  for (let i = 0; i < sorted.length; i += 2) {
    if (arr[i] !== arr[i + 1]) {
      return arr[i]
    }
  }
}

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(singleNumber([0,1,0]), 1)
assert.equal(singleNumber([1,2,3,1,2]), 3)

assert.equal(singleNumber_2([0,1,0]), 1)
assert.equal(singleNumber_2([1,2,3,1,2]), 3)

assert.equal(singleNumber_3([0,1,0]), 1)
assert.equal(singleNumber_3([1,2,3,1,2]), 3)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
