
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


//  basic linked-list class
class LinkedList {
  constructor() {
    this.head = null
  }
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
  }
}

/*  ------------------------------------------------------  */

LinkedList.prototype.findKthToLast = function(k) {
  if (k < 0) return false
  let p1 = this.head
  let p2 = this.head
  for (let i = 0; i < k; i++) {
    p2 = p2.next
  }
  if (!p2) return false
  while (p2 && p2.next) {
    p2 = p2.next
    p1 = p1.next
  }
  return p1.data
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)
ll.add(23)
ll.add(99)
ll.add('hi')

assert.equal(ll.findKthToLast(-1), false)
assert.equal(ll.findKthToLast(0), 'hi')
assert.equal(ll.findKthToLast(1), 99)
assert.equal(ll.findKthToLast(2), 23)
assert.equal(ll.findKthToLast(3), 3)
assert.equal(ll.findKthToLast(4), 2)
assert.equal(ll.findKthToLast(5), 1)
assert.equal(ll.findKthToLast(6), false)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
