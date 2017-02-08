
//  implement a stack.

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Stack {

  constructor() {
    this.stack = []
  }

  /*  ------------------------------------------------------  */

  //  add item to top of a stack.
  push(item) {
    this.stack.push(item)
  }

  /*  ------------------------------------------------------  */

  //  remove item from top of a stack.
  pop() {
    if (this.stack.length === 0) return
    return this.stack.pop()
  }

  /*  ------------------------------------------------------  */

  //  return (without removing) item from top of a stack.
  peek() {
    return this.stack[this.stack.length - 1]
  }

  /*  ------------------------------------------------------  */

  //  reverse order of a stack.
  reverse() {
    const arr = []
    for (let i = 0; i < this.stack.length; i++) {
      arr.push(this.stack.pop())
    }
    this.stack = arr
  }

  /*  ------------------------------------------------------  */

  //  return size of a stack.
  size() {
    return this.stack.length
  }

  /*  ------------------------------------------------------  */

  //  convert stack to an array (already is).
  toArray() {
    return this.list
  }

  /*  ------------------------------------------------------  */

  //  convert stack to a string.
  toString() {
    return this.stack.join(' ')
  }

  /*  ------------------------------------------------------  */

  //  clear a stack.
  clear() {
    this.stack = []
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const s = new Stack()
s.push(1)
s.push(23)
s.push(99)
s.push(100)
s.push('hi')
console.log(s)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
