
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


//  Fisher-Yates shuffle - (https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
const shuffle = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1))
    const temp = arr[random]
    arr[random] = arr[i]
    arr[i] = temp
  }
  return arr
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const assert = require('assert')

/*  ------------------------------------------------------  */

const sorted = [0,1,2,3,4,5,6,7,8,9]
const arr = [0,1,2,3,4,5,6,7,8,9]
assert.notDeepEqual(shuffle(arr), sorted)
const arr2 = [0,1,2,3,4,5,6,7,8,9]
assert.notDeepEqual(shuffle(arr2), sorted)
const arr3 = [0,1,2,3,4,5,6,7,8,9]
assert.notDeepEqual(shuffle(arr3), sorted)
const arr4 = [0,1,2,3,4,5,6,7,8,9]
assert.notDeepEqual(shuffle(arr4), sorted)
const arr5 = [0,1,2,3,4,5,6,7,8,9]
assert.notDeepEqual(shuffle(arr5), sorted)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
