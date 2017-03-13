
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const fibonacci = (x) => {
  let a = 1
  let b = 0
  let temp
  while (x >= 0) {
    temp = a
    a += b
    b = temp
    x -= 1
  }
  return b
}

/*  ------------------------------------------------------  */

const fibonacci2 = (x) => {
  if (x === 0 || x === 1) {
    return 1
  }
  return fibonacci2(x - 1) + fibonacci2(x - 2)
}

/*  ------------------------------------------------------  */

const fibonacci3 = (x, obj = {}) => {
  if (obj[x]) {
    return obj[x]
  }
  if (x === 0 || x === 1) {
    return 1
  }
  return obj[x] = fibonacci3(x - 1, obj) + fibonacci3(x - 2, obj)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(fibonacci(5), 8)
assert.equal(fibonacci(10), 89)
assert.equal(fibonacci(15), 987)
assert.equal(fibonacci2(5), 8)
assert.equal(fibonacci2(10), 89)
assert.equal(fibonacci2(15), 987)
assert.equal(fibonacci3(5), 8)
assert.equal(fibonacci3(10), 89)
assert.equal(fibonacci3(15), 987)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
