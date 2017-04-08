
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const hackerrankString = (str) => {
  let count = 0
  const arr = str.split('')
  const word = 'hackerrank'
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word[count]) {
      count += 1
    }
  }
  return count === word.length
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(hackerrankString(''), false)
assert.equal(hackerrankString('hackerworld'), false)
assert.equal(hackerrankString('hereiamstackerrank'), true)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
