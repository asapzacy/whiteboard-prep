
//  implement a queue.

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Queue {

  constructor() {
    this.list = []
    this.length = 0
  }

  /*  ------------------------------------------------------  */

  //  add item to end of a queue.
  enqueue(item) {
    this.length += 1
    this.list.push(item)
  }

  /*  ------------------------------------------------------  */

  //  remove item from start of a queue.
  dequeue() {
    if (this.length === 0) return
    this.length -= 1
    return this.list.shift()
  }


  /*  ------------------------------------------------------  */

  //  return (without removing) the top item from a queue.
  peek() {
    return this.list[0]
  }

  /*  ------------------------------------------------------  */

  //  reverse the order of a queue.
  reverse() {
    const arr = []
    for (let i = this.length - 1; i >= 0; i--) {
      arr.push(this.list[i])
    }
    this.list = arr
  }

  /*  ------------------------------------------------------  */

  //  return size of a queue.
  size() {
    return this.length
  }

  /*  ------------------------------------------------------  */

  //  convert queue to an array (already is).
  toArray() {
    return this.list
  }

  /*  ------------------------------------------------------  */

  //  convert queue to a string.
  toString() {
    return this.toArray().toString()
  }

  /*  ------------------------------------------------------  */

  //  clear a queue.
  clear() {
    this.list = []
    this.length = 0
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
