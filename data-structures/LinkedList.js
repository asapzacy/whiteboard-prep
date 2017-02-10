
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class LinkedList {

  constructor() {
    this.head = null
    this.length = 0
  }

  /*  ------------------------------------------------------  */

  add(data) {
    const node = { data, next: null }
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length += 1
  }

  /*  ------------------------------------------------------  */

  find(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('index out of bounds.. ')
    }
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  /*  ------------------------------------------------------  */

  remove(index) {
    if (!this.head) {
      throw new Error('can\'t remove from an empty list.. ')
    }
    if (index === 0) {
      this.head = this.head.next
    } else {
      const previous = this.find(index - 1)
      previous.next = previous.next.next
    }
    this.length -= 1
  }

  /*  ------------------------------------------------------  */

  //  same as add method, but takes in a index//position to insert node at.
  insert(data, index) {
    const node = { data, next: null }
    if (index === 0) {
      node.next = this.head
      this.head = node
    } else {
      let previous = this.find(index - 1)
      let current = previous.next
      node.next = current
      previous.next = node
    }
    this.length += 1
  }

  /*  ------------------------------------------------------  */

  //  same as remove method, but takes in a data node instead of index.
  delete(data) {
    let current = this.head
    let previous = null
    while (current) {
      if (current.data === data) {
        if (!previous) {
          current.data = current.next.data
          current.next = current.next.next
        } else {
          previous.next = current.next
        }
        this.length -= 1
      } else {
        previous = current
      }
      current = current.next
    }
  }

  /*  ------------------------------------------------------  */

  size() {
    return this.length
  }

  /*  ------------------------------------------------------  */

  print() {
    let str = ''
    let current = this.head
    while (current) {
      str += `${current.data} `
      current = current.next
    }
    console.log(`LinkedList: ${str.trim()}`)
  }

  /*  ------------------------------------------------------  */

  contains(data) {
    let current = this.head
    while (current) {
      if (current.data === data) {
        return true
      }
      current = current.next
    }
    return false
  }

  /*  ------------------------------------------------------  */

  reverse() {
    let current = this.head
    let previous = null
    let nextNode = null
    while (current) {
      nextNode = current.next
      current.next = previous
      previous = current
      current = nextNode
    }
    this.head = previous
  }

  /*  ------------------------------------------------------  */

  removeDuplicates() {
    const alreadySeen = new Set()
    let current = this.head
    let previous = null
    while (current) {
      if (alreadySeen.has(current.data)) {
        previous.next = current.next
        this.length -= 1
      } else {
        alreadySeen.add(current.data)
        previous = current
      }
      current = current.next
    }
  }

  /*  ------------------------------------------------------  */

  toArray() {
    let current = this.head
    const arr = []
    while (current) {
      arr.push(current.data)
      current = current.next
    }
    return arr
  }

  /*  ------------------------------------------------------  */

  toString() {
    return this.toArray().toString()
  }

  /*  ------------------------------------------------------  */

  isPalindrome() {
    return this.toString() === this.toArray().reverse().toString()
  }

  /*  ------------------------------------------------------  */

  isCircular() {
    let fastRunner = this.head
    let slowRunner = this.head
    while (fastRunner && fastRunner.next) {
      slowRunner = slowRunner.next
      fastRunner = fastRunner.next.next
      if (slowRunner === fastRunner) {
        return true
      }
    }
    return false
  }

  /*  ------------------------------------------------------  */

  findCircleStart() {
    if (!this.isCircular()) return false
    let slowRunner = this.head
    let fastRunner = this.head
    let hasLooped = false
    while (fastRunner && fastRunner.next) {
      slowRunner = slowRunner.next
      fastRunner = fastRunner.next.next
      if (slowRunner === fastRunner) {
        hasLooped = true
        break
      }
    }
    if (hasLooped) {
      slowRunner = this.head
      while (slowRunner !== fastRunner) {
        slowRunner = slowRunner.next
        fastRunner = fastRunner.next
      }
      return slowRunner
    }
  }

  /*  ------------------------------------------------------  */

  findMiddle() {
    let slowRunner = this.head
    let fastRunner = this.head
    while (fastRunner && fastRunner.next) {
      slowRunner = slowRunner.next
      fastRunner = fastRunner.next.next
    }
    return slowRunner
  }

  /*  ------------------------------------------------------  */

  findNthToLast(index) {
    let current = this.head
    const end = this.length - index - 1
    for (let i = 0; i < end; i++) {
      current = current.next
    }
    return current
  }

  /*  ------------------------------------------------------  */

  findTail() {
    return this.find(this.size() - 1)
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const assert = require('assert')

/*  ------------------------------------------------------  */

const ll = new LinkedList()
assert.equal(ll.size(), 0)
assert.throws(() => ll.remove(0), Error)
ll.add('a')
ll.add('b')
ll.add('c')
ll.add('d')
ll.add('e')
assert.equal(ll.size(), 5)
assert.equal(ll.find(2).data, 'c')
ll.print()     //  => LinkedList: a b c d e
ll.remove(0)
assert.equal(ll.head.data, 'b')
ll.insert('a', 0)
assert.equal(ll.head.data, 'a')
assert.throws(() => ll.find(10), Error)
assert.throws(() => ll.find(-1), Error)
ll.add('a')
ll.add('a')
ll.print()     //  => LinkedList: a b c d e a a
assert.equal(ll.size(), 7)
assert.equal(ll.head.data, 'a')
assert.equal(ll.findTail().data, 'a')
ll.delete('a')
ll.print()     //  => LinkedList: b c d e
assert.equal(ll.size(), 4)
assert.equal(ll.head.data, 'b')
assert.equal(ll.findTail().data, 'e')
ll.insert('a', 0)
assert.equal(ll.head.data, 'a')
ll.reverse()
assert.equal(ll.head.data, 'e')
ll.reverse()
assert.equal(ll.contains('c'), true)
assert.equal(ll.contains('z'), false)
ll.add('c')
ll.add('d')
ll.add('c')
ll.add('d')
ll.print()     //  => LinkedList: a b c d e c d c d
assert.equal(ll.size(), 9)
ll.removeDuplicates()
assert.equal(ll.size(), 5)
ll.print()     //  => LinkedList: a b c d e

/*  ------------------------------------------------------  */

const ll2 = new LinkedList()
ll2.add('a')
ll2.add('b')
ll2.add('c')
ll2.add('b')
ll2.add('a')
console.log(ll2.toArray())     //  => [ 'a', 'b', 'c', 'b', 'a' ]
console.log(ll2.toString())     //  => a,b,c,b,a
assert.equal(ll2.isPalindrome(), true)
ll2.remove(ll2.size() - 1)
assert.equal(ll2.isPalindrome(), false)
ll2.add('a')
const ll3 = new LinkedList()
ll3.add('a')
ll3.add('b')
ll3.add('c')
ll3.findTail().next = ll3.head
assert.equal(ll2.isCircular(), false)
assert.equal(ll3.isCircular(), true)
assert.equal(ll2.findCircleStart(), false)
assert.equal(ll3.findCircleStart().data, 'a')
const ll4 = new LinkedList()
ll4.add('x')
ll4.add('y')
ll4.add('z')
assert.equal(ll2.findMiddle().data, 'c')
assert.equal(ll4.findMiddle().data, 'y')
assert.equal(ll4.findNthToLast(2).data, 'x')
assert.equal(ll4.findNthToLast(1).data, 'y')
assert.equal(ll4.findNthToLast(0).data, 'z')


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
