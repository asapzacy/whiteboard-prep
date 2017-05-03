
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const wordWrap = (str, size) => {
  const words = str.split(' ')
  const result = []
  let wrap = ''
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const diff = size - wrap.trim().length
    if (word.length <= diff) {
      wrap += `${word} `
    } else {
      result.push(wrap.trim())
      wrap = `${word} `
    }
  }
  return result
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.deepEqual(wordWrap('the quick brown fox jumped over the fence.', 15), 'the quick brown ', 'fox jumped over ', 'the fence.')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
