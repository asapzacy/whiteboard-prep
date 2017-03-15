
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const isAnagram = (str, str2) => {
  return str.split('').sort().join('') === str2.split('').sort().join('')
}

/*  ------------------------------------------------------  */

const isAnagram2 = (str, str2) => {
  if (str.length !== str2.length) {
    return false
  }
  const obj = {}
  for (let i = 0; i < str.length; i++) {
    const item = str[i]
    obj[item] = (obj[item] || 0) + 1
  }
  for (let i = 0; i < str2.length; i++) {
    const item = str2[i]
    if (obj[item] && obj[item] > 0) {
      if (obj[item] === 1) {
        delete obj[item]
      } else {
        obj[item] -= 1
      }
    }
  }
  return Object.keys(obj).length === 0
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(isAnagram('',''), true)
assert.equal(isAnagram('rat','car'), false)
assert.equal(isAnagram('anagram','nagaram'), true)
assert.equal(isAnagram2('',''), true)
assert.equal(isAnagram2('anagram','nagaram'), true)
assert.equal(isAnagram2('rat','car'), false)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
