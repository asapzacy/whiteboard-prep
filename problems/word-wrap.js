
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

const str = 'the quick brown fox jumped over the fence.'
const result = ['the quick brown ', 'fox jumped over ', 'the fence.']
assert.deepEqual(wordWrap(str, 15), result)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
