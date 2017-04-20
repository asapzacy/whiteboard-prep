
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const palindromeNumber = (x) => {
  const str = String(x)
  const middle = Math.floor(str.length / 2)
  for (let i = 0; i < middle; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

/*  ------------------------------------------------------  */


const palindromeNumber2 = (x) => {
  const str = String(x)
  return str === str.split('').reverse().join('')
}

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(palindromeNumber(0), true)
assert.equal(palindromeNumber(10), false)
assert.equal(palindromeNumber(101), true)
assert.equal(palindromeNumber(999), true)
assert.equal(palindromeNumber(-2147483648), false)
assert.equal(palindromeNumber2(0), true)
assert.equal(palindromeNumber2(10), false)
assert.equal(palindromeNumber2(101), true)
assert.equal(palindromeNumber2(999), true)
assert.equal(palindromeNumber2(-2147483648), false)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
