
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const isSubsequence = (sub, str) => {
  if (!sub) return true
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sub[count]) {
      count += 1
      if (count === sub.length) {
        return true
      }
    }
  }
  return false
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const sub = 'abc'
const str = 'ahbgdc'
assert.equal(isSubsequence(sub, str), true)
const sub2 = 'axc'
const str2 = 'ahbgdc'
assert.equal(isSubsequence(sub2, str2), false)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
