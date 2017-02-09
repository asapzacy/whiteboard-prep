
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Queue {

  constructor() {
    this.queue = []
  }

  /*  ------------------------------------------------------  */

  enqueue(value) {
    this.queue.push(value)
  }

  /*  ------------------------------------------------------  */

  dequeue() {
    return this.queue.shift()
  }

  /*  ------------------------------------------------------  */

  peek() {
    return this.queue[0]
  }

  /*  ------------------------------------------------------  */

  size() {
    return this.queue.length
  }

  /*  ------------------------------------------------------  */

  print() {
    console.log(this.queue.join(' '))
  }

  /*  ------------------------------------------------------  */

  reverse() {
    this.queue.reverse()
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const assert = require('assert')
const q = new Queue()

/*  ------------------------------------------------------  */

assert.equal(q.size(), 0)
q.enqueue(1)
q.enqueue(23)
q.enqueue(99)
q.enqueue(100)
q.enqueue('hi')
assert.equal(q.size(), 5)
assert.equal(q.peek(), 1)
q.dequeue()
assert.equal(q.peek(), 23)
assert.equal(q.size(), 4)
q.reverse()
assert.equal(q.peek(), 'hi')
q.enqueue(-1)
q.enqueue(true)
assert.equal(q.dequeue(), 'hi')
assert.equal(q.peek(), 100)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
