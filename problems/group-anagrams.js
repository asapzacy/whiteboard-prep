
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const groupAnagrams = (arr) => {
  const obj = {}
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const key = item.split('').sort().join('')
    obj[key] = obj[key] || []
    obj[key].push(item)
  }
  for (let pair in obj) {
    result.push(obj[pair].sort())
  }
  return result
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = ['eat','tea','tan','ate','nat','bat']
const answer = [['ate','eat','tea'],['nat','tan'],['bat']]
assert.deepEqual(groupAnagrams(arr), answer)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
