
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const sortedCapitals = (str) =>
  return Array.from(str).filter(ch => ch === ch.toUpperCase()).sort().join('')
}

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const str = 'aBsrTdA'
assert.equal(sortedCapitals(str), 'ABT')
const str2 = 'ASAPZACY'
assert.equal(sortedCapitals(str2), 'AAACPSYZ')
const str3 = 'AbcdEfghIjklmnOpqrstUvwxyz'
assert.equal(sortedCapitals(str3), 'AEIOU')
const str4 = 'zyxwvUtsrqpOnmlkjIhgfEdcbA'
assert.equal(sortedCapitals(str4), 'AEIOU')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
