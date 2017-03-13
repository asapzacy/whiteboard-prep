
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const fizzbuzz = (x) => {
  const arr = []
  for (let i = 1; i <= x; i++) {
    let str = ''
    if (i % 3 === 0) {
      str += 'Fizz'
    }
    if (i % 5 === 0) {
      str += 'Buzz'
    }
    arr.push(str || String(i))
  }
  return arr
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

console.log(fizzbuzz(3))
assert.deepEqual(fizzbuzz(1), ['1'])
assert.deepEqual(fizzbuzz(2), ['1', '2'])
assert.deepEqual(fizzbuzz(3), ['1', '2', 'Fizz'])
assert.deepEqual(fizzbuzz(4), ['1', '2', 'Fizz', '4'])
assert.deepEqual(fizzbuzz(5), ['1', '2', 'Fizz', '4', 'Buzz'])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
