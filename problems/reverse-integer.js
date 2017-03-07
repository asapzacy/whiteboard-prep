
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const reverseInteger = (x) => {
  const MAX_INT = (2 ** 31) + 1
  const MIN_INT = -Math.abs(MAX_INT)
  const sign = x > 0 ? 1 : -1
  let result = ''
  let str = String(x)
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== '-') {
      result += str[i]
    }
  }
  return (result < MIN_INT || result > MAX_INT) ? 0 : (result * sign)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(reverseInteger(123), 321)
assert.equal(reverseInteger(-123), -321)
assert.equal(reverseInteger(1534236469), 0)
assert.equal(reverseInteger(-2147483648), 0)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
