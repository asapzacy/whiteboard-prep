
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const sortedCapitals = (str) =>
  return Array.from(str).filter(ch => ch === ch.toUpperCase()).sort().join('')
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(sortedCapitals('aBsrTdA'), 'ABT')
assert.equal(sortedCapitals('ASAPZACY'), 'AAACPSYZ')
assert.equal(sortedCapitals('AbcdEfghIjklmnOpqrstUvwxyz'), 'AEIOU')
assert.equal(sortedCapitals('zyxwvUtsrqpOnmlkjIhgfEdcbA'), 'AEIOU')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
