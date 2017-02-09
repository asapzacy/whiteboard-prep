
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Stack {

  constructor() {
    this.stack = []
  }

  /*  ------------------------------------------------------  */

  push(value) {
    this.stack.push(value)
  }

  /*  ------------------------------------------------------  */

  pop() {
    return this.stack.pop()
  }

  /*  ------------------------------------------------------  */

  peek() {
    return this.stack[this.stack.length - 1]
  }

  /*  ------------------------------------------------------  */

  size() {
    return this.stack.length
  }

  /*  ------------------------------------------------------  */

  print() {
    console.log(`stack: ${this.stack.join(' ')}`)
  }

  /*  ------------------------------------------------------  */

  reverse() {
    return this.stack.reverse()
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const assert = require('assert')
const s = new Stack()

/*  ------------------------------------------------------  */

assert.equal(s.size(), 0)
s.push(1)
s.push(23)
s.push(99)
s.push(100)
s.push('hi')
assert.equal(s.size(), 5)
assert.equal(s.peek(), 'hi')
s.pop()
assert.equal(s.peek(), 100)
assert.equal(s.size(), 4)
s.reverse()
assert.equal(s.peek(), 1)
s.push(-1)
s.push(true)
assert.equal(s.pop(), true)
assert.equal(s.peek(), -1)
s.print()     //  => stack: 100 99 23 1 -1


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
