
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const pangram = (str) => {
  const s = new Set()
  for (let i = 0; i < str.length; i++) {
    const ch = str[i] !== ' ' && str[i].toLowerCase()
    if (ch) {
      s.add(ch)
    }
  }
  return s.size === 26
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(pangram(''), false)
assert.equal(pangram('We promptly judged antique ivory buckles for the prize'), false)
assert.equal(pangram('The quick brown fox jumps over the lazy dog'), true)
assert.equal(pangram('We promptly judged antique ivory buckles for the next prize'), true)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
