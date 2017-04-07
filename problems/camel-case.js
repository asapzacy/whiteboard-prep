
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const camelCase = (str) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    if (ch === ch.toUpperCase()) {
      count += 1
    }
  }
  return str ? count + 1 : 0
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(camelCase(''), 0)
assert.equal(camelCase('zacArellano'), 2)
assert.equal(camelCase('todayIsAGoodDay'), 5)
assert.equal(camelCase('saveChangesInTheEditor'), 5)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
