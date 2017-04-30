
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const romanToInteger = (str) => {
  let result = 0
  const roman = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 }
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    const nextCh = str[i + 1]
    if (roman[ch] < roman[nextCh]) {
      result -= roman[ch]
    } else {
      result += roman[ch]
    }
  }
  return result
}

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert');

assert.equal(romanToInteger('I'), 1)
assert.equal(romanToInteger('VI'), 6)
assert.equal(romanToInteger('XIX'), 19)
assert.equal(romanToInteger('XLVI'), 46)
assert.equal(romanToInteger('CXLVI'), 146)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
