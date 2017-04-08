
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const beautifulBinaryStr = (str) => {
  let result = 0
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (count === 0 && str[i] === '0') {
      count += 1
    } else if (count === 1 && str[i] === '1') {
      count += 1
    } else if (count === 2) {
      if (str[i] === '1') {
        count = 0
      } else {
        result += 1
        count = 0
      }
    }
  }
  return result
}

/*  ------------------------------------------------------  */

const beautifulBinaryStr2 = (str) => {
  const edited = str.replace(/010/g, 'x')
  const result = (edited.match(/x/g) || []).length
  return result
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(beautifulBinaryStr(''), 0)
assert.equal(beautifulBinaryStr('01100'), 0)
assert.equal(beautifulBinaryStr('0101010'), 2)
assert.equal(beautifulBinaryStr('0100101010'), 3)
assert.equal(beautifulBinaryStr2(''), 0)
assert.equal(beautifulBinaryStr2('01100'), 0)
assert.equal(beautifulBinaryStr2('0101010'), 2)
assert.equal(beautifulBinaryStr2('0100101010'), 3)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
