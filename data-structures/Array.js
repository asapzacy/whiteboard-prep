
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Array {

  constructor() {
    this.array = []
  }

  /*  ------------------------------------------------------  */

  add(value) {
    this.array.push(value)
  }

  /*  ------------------------------------------------------  */

  remove(value) {
    this.array = this.array.filter(item => item !== value)
  }

  /*  ------------------------------------------------------  */

  search(value) {
    return this.array.includes(value) ? this.array.indexOf(value) : null
  }

  /*  ------------------------------------------------------  */

  getAtIndex(index) {
    return this.array[index]
  }

  /*  ------------------------------------------------------  */

  size() {
    return this.array.length
  }

  /*  ------------------------------------------------------  */

  print() {
    console.log(`array: ${this.array.join(' ')}`)
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const assert = require('assert')
const a = new Array()

/*  ------------------------------------------------------  */

assert.equal(a.size(), 0)
a.add(1)
a.add(23)
a.add(99)
a.add(100)
a.add('hi')
assert.equal(a.size(), 5)
assert.equal(a.getAtIndex(2), 99)
assert.equal(a.getAtIndex(4), 'hi')
a.add(100)
assert.equal(a.size(), 6)
a.remove(100)
assert.equal(a.size(), 4)
assert.equal(a.search('hi'), 3)
assert.equal(a.search('missing'), null)
a.print()     //  => array: 1 23 99 hi


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
