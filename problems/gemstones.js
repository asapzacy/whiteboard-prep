
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const gemstones = (arr) => {
  let result = new Set(arr[0])
  for (let i = 1; i < arr.length; i++) {
    result = new Set([...result].filter(el => arr[i].includes(el)))
  }
  return [...result].join('')
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(gemstones([]), '')
assert.equal(gemstones(['a','b','c','d','e']), '')
assert.equal(gemstones(['zac','caz']), 'zac')
assert.equal(gemstones(['abcdde','baccd','eeabg']), 'ab')
assert.equal(gemstones(['mate','meat','tame','team']), 'mate')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
