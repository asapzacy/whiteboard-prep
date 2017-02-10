
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

const arr = [0,1,2,3,4,5,6,7,8,9]
assert.notDeepEqual(shuffle(arr), [0,1,2,3,4,5,6,7,8,9])


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
