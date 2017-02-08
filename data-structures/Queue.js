
//  implement a queue.

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Queue {

  constructor() {
    this.queue = []
  }

  /*  ------------------------------------------------------  */

  //  add item to end of a queue.
  enqueue(item) {
    this.queue.push(item)
  }

  /*  ------------------------------------------------------  */

  //  remove item from start of a queue.
  dequeue() {
    if (this.queue.length === 0) return
    return this.queue.shift()
  }

  /*  ------------------------------------------------------  */

  //  return (without removing) the top item from a queue.
  peek() {
    return this.queue[0]
  }

  /*  ------------------------------------------------------  */

  //  reverse the order of a queue.
  reverse() {
    const arr = []
    for (let i = this.queue.length - 1; i >= 0; i--) {
      arr.push(this.queue[i])
    }
    this.queue = arr
  }

  /*  ------------------------------------------------------  */

  //  return size of a queue.
  size() {
    return this.queue.length
  }

  /*  ------------------------------------------------------  */

  //  convert queue to an array (already is).
  toArray() {
    return this.queue
  }

  /*  ------------------------------------------------------  */

  //  convert queue to a string.
  toString() {
    return this.queue.join(' ')
  }

  /*  ------------------------------------------------------  */

  //  clear a queue.
  clear() {
    this.queue = []
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const q = new Queue()
q.enqueue(1)
q.enqueue(23)
q.enqueue(99)
q.enqueue(100)
q.enqueue('hi')
console.log(q)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
