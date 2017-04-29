
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const isomorphicPatternString = (pattern, str) => {
  const words = str.split(' ')
  if (pattern.length !== words.length) {
    return false
  }
  const hash = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const ch = pattern[i]
    if (!hash[ch]) {
      hash[ch] = word
    } else if (hash[ch] !== word) {
      return false
    }
  }
  return true
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(isomorphicPatternString('abba', 'dog cat'), false)
assert.equal(isomorphicPatternString('abba', 'dog cat cat dog'), true)
assert.equal(isomorphicPatternString('abba', 'dog cat cat fish'), false)
assert.equal(isomorphicPatternString('aaaa', 'dog cat cat dog'), false)
assert.equal(isomorphicPatternString('abba', 'dog dog dog dog'), true)
assert.equal(isomorphicPatternString('abba', 'dog dog dog cat'), false)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
