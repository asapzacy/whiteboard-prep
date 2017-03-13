
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const reverseString = (str) => {
  return str.split('').reverse().join('')
}

/*  ------------------------------------------------------  */

const reverseString2 = (str) => {
  const arr = str.split('')
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  return arr.join('')
}

/*  ------------------------------------------------------  */

const reverseString3 = (str) => {
  if (str.length === 1) {
    return str
  }
  return reverseString3(str.slice(1)) + str.charAt(0)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const str = 'zacarellano'
const result = 'onalleracaz'
assert.equal(reverseString(str), result)
assert.equal(reverseString2(str), result)
assert.equal(reverseString3(str), result)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
