
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const loveLetterMystery = (str) => {
  let count = 0
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let current = str.charCodeAt(i)
    let opposite = str.charCodeAt(str.length - 1 - i)
    count += Math.abs(current - opposite)
  }
  return count
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(loveLetterMystery(''), 0)
assert.equal(loveLetterMystery('abc'), 2)
assert.equal(loveLetterMystery('abcba'), 0)
assert.equal(loveLetterMystery('abcd'), 4)
assert.equal(loveLetterMystery('cba'), 2)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
