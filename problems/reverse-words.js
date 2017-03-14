
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const reverseWords = (str) => {
  const words = str.trim().split(' ')
  const result = []
  for (let i = words.length - 1; i >= 0; i--) {
    words[i] && result.push(words[i])
  }
  return result.join(' ')
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(reverseWords('the sky is blue'), 'blue is sky the')
assert.equal(reverseWords('   a   b '), 'b a')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
