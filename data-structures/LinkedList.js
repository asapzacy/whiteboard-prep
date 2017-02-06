
//  implement a linked list

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class LinkedList {

  constructor() {
    this.head = null
    this.length = 0
  }

  /*  ------------------------------------------------------  */

  //  add node to end of linked list.
  add(data) {
    const node = { data, next: null }
    if (this.head === null) {
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

  //  find + return node at index of linked list.
  find(index) {
    if (index < 0 || index >= this.length) {
      console.log('index out of range.. ')
    }
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  /*  ------------------------------------------------------  */

  //  remove node at index of linked list.
  remove(index) {
    if (index < 0 || index >= this.length) {
      console.log('index out of bounds.. ')
    }
    if (index === 0) {
      this.head = this.head.next
    } else {
      let previous = this.find(index - 1)
      previous.next = previous.next.next
    }
    this.length -= 1
  }

  /*  ------------------------------------------------------  */

  //  reverse a linked list.
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

  //  check if linked list contains value.
  contains(value) {
    let current = this.head
    while (current) {
      if (current.data === value) {
        return true
      }
      current = current.next
    }
    return false
  }

  /*  ------------------------------------------------------  */

  //  return size of linked list.
  size() {
    return this.length
  }

  /*  ------------------------------------------------------  */

  //  convert linked list to an array.
  toArray() {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.data)
      current = current.next
    }
    return arr
  }

  /*  ------------------------------------------------------  */

  //  convert linked list to a string.
  toString() {
    return this.toArray().toString()
  }

  /*  ------------------------------------------------------  */

  //  clear a linked list.
  clear() {
    this.head = null
    this.length = 0
  }

  /*  ------------------------------------------------------  */

  //  remove duplicates from an unsorted linked list.
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

  //  remove all nodes of value from linked list.
  removeValue(value) {
    let current = this.head
    let previous = null
    while (current) {
      if (current.data === value) {
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

  //  check if linked list is a palindrome.
  isPalindrome() {
    return this.toString() === this.toArray().reverse().toString()
  }

  /*  ------------------------------------------------------  */

  //  check if linked list is a circular linked list.
  isCircular() {
    let slowRunner = this.head
    let fastRunner = this.head
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

  //  if linked list is circular, find starting node of loop.
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

  //  find middle node of linked list.
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

  //  find the nth-to-last node of linked list.
  findNthToLast(index) {
    let current = this.head
    const last = this.length - index
    for (let i = 0; i < last; i++) {
      current = current.next
    }
    return current
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const ll = new LinkedList()
ll.add('a')
ll.add('b')
ll.add('c')
ll.add('d')
ll.add('e')
console.log(ll)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
