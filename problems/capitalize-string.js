
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const capitalizeString = (str) => {
  const arr = str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i]
    arr[i] = word[0].toUpperCase() + word.slice(1)
  }
  return arr.join(' ')
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(capitalizeString('x'), 'X')
assert.equal(capitalizeString('hello'), 'Hello')
assert.equal(capitalizeString('hi, how are you?'), 'Hi, How Are You?')
assert.equal(capitalizeString('it is a nice day outside.'), 'It Is A Nice Day Outside.')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
