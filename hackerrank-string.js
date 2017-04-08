
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
  if (count === word.length) {
    return 'YES'
  } else {
    return 'NO'
  }
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(hackerrankString(''), 'NO')
assert.equal(hackerrankString('hackerworld'), 'NO')
assert.equal(hackerrankString('hereiamstackerrank'), 'YES')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
