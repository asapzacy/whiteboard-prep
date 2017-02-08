
//  implement a stack.

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Stack {

  constructor() {
    this.list = []
    this.length = 0
  }

  /*  ------------------------------------------------------  */

  //  add item to top of a stack.
  push(item) {
    this.length += 1
    this.list.push(item)
  }

  /*  ------------------------------------------------------  */

  //  remove item from top of a stack.
  pop() {
    if (this.length === 0) return
    this.length -= 1
    return this.list.pop()
  }

  /*  ------------------------------------------------------  */

  //  return (without removing) item from top of a stack.
  peek() {
    return this.list[this.length - 1]
  }

  /*  ------------------------------------------------------  */

  //  reverse order of a stack.
  reverse() {
    const arr = []
    for (let i = 0; i < this.length; i++) {
      arr.push(this.list.pop())
    }
    this.list = arr
  }

  /*  ------------------------------------------------------  */

  //  return size of a stack.
  size() {
    return this.length
  }

  /*  ------------------------------------------------------  */

  //  convert stack to an array (already is).
  toArray() {
    return this.list
  }

  /*  ------------------------------------------------------  */

  //  convert stack to a string.
  toString() {
    return this.toArray().toString()
  }

  /*  ------------------------------------------------------  */

  //  clear a stack.
  clear() {
    this.list = []
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
