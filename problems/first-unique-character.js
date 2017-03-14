
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const firstUniqueChar = (str) => {
  const obj = {}
   str.split('').forEach(item => obj[item] = (obj[item] || 0) + 1)
   for (let i = 0; i < str.length; i++) {
       if (obj[str[i]] === 1) {
           return i
       }
   }
   return -1
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(firstUniqueChar('leetcode'), 0)
assert.equal(firstUniqueChar('loveleetcode'), 2)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
