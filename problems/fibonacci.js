
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

const fibonacci_2 = (x) => {
  if (x === 0 || x === 1) {
    return 1
  }
  return fibonacci_2(x - 2) + fibonacci_2(x - 1)
}

/*  ------------------------------------------------------  */

const fibonacci_3 = (x, mem = {}) => {
  if (mem[x]) {
    return mem[x]
  }
  if (x === 0 || x === 1) {
    return 1
  }
  return mem[x] = fibonacci_3(x - 2, mem) + fibonacci_3(x - 1, mem)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(fibonacci(5), 8)
assert.equal(fibonacci(10), 89)
assert.equal(fibonacci(15), 987)

assert.equal(fibonacci_2(5), 8)
assert.equal(fibonacci_2(10), 89)
assert.equal(fibonacci_2(15), 987)

assert.equal(fibonacci_3(5), 8)
assert.equal(fibonacci_3(10), 89)
assert.equal(fibonacci_3(15), 987)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
