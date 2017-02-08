
//  implement a stack.

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Stack {

  constructor() {
    this.top = []
    this.length = 0
  }

  /*  ------------------------------------------------------  */

  //  add item to the top of a stack.
  push(item) {
    this.length += 1
    this.top.push(item)
  }

  /*  ------------------------------------------------------  */

  //  remove the top item from a stack.
  pop() {
    if (this.length === 0) return
    this.length -= 1
    return this.top.pop()
  }

  /*  ------------------------------------------------------  */

  //  return (without removing) the top item from a stack.
  peek() {
    return this.top[this.length - 1]
  }

  /*  ------------------------------------------------------  */

  //  reverse the order of a stack.
  reverse() {
    const arr = []
    for (let i = 0; i < this.length; i++) {
      arr.push(this.top.pop())
    }
    this.top = arr
  }

  /*  ------------------------------------------------------  */

  //  return size of a stack.
  size() {
    return this.length
  }

  /*  ------------------------------------------------------  */

  //  convert stack to an array (already is).
  toArray() {
    return this.top
  }

  /*  ------------------------------------------------------  */

  //  convert stack to a string.
  toString() {
    return this.toArray().toString()
  }

  /*  ------------------------------------------------------  */

  //  clear a stack.
  clear() {
    this.top = []
    this.length = 0
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
