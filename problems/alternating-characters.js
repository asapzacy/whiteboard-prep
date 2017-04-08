
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const alternatingChar = (str) => {
  let count = 0
  let ch = str[0]
  for (let i = 1; i < str.length; i++) {
    if (str[i] === ch) {
      count += 1
    } else {
      ch = str[i]
    }
  }
  return count
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(alternatingChar('AAAA'), 3)
assert.equal(alternatingChar('BBBBB'), 4)
assert.equal(alternatingChar('ABABABAB'), 0)
assert.equal(alternatingChar('BABABA'), 0)
assert.equal(alternatingChar('AAABBB'), 4)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
