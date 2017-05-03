
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const reverseString = (str) => {
  return str.split('').reverse().join('')
}

/*  ------------------------------------------------------  */

const reverseString_2 = (str) => {
  const arr = str.split('')
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  return arr.join('')
}

/*  ------------------------------------------------------  */

const reverseString_3 = (str) => {
  if (str === '') {
    return ''
  }
  return reverseString_3(str.slice(1)) + str.charAt(0)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(reverseString('hi'), 'ih')
assert.equal(reverseString('maverick'), 'kcirevam')
assert.equal(reverseString('zacarellano'), 'onalleracaz')

assert.equal(reverseString_2('hi'), 'ih')
assert.equal(reverseString_2('maverick'), 'kcirevam')
assert.equal(reverseString_2('zacarellano'), 'onalleracaz')

assert.equal(reverseString_3('hi'), 'ih')
assert.equal(reverseString_3('maverick'), 'kcirevam')
assert.equal(reverseString_3('zacarellano'), 'onalleracaz')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
