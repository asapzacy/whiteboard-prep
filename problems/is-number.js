
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const isNumber = (str) => str.trim().length && !Number.isNaN(Number(str)) ? true : false


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.strictEqual(isNumber('0'), true)
assert.strictEqual(isNumber(' '), false)
assert.strictEqual(isNumber('1a'), false)
assert.strictEqual(isNumber('99'), true)
assert.strictEqual(isNumber(' 0.1'), true)
assert.strictEqual(isNumber('abc'), false)
assert.strictEqual(isNumber('2e10'), true)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
