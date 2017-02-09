
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Array {

  constructor() {
    this.array = []
  }

  /*  ------------------------------------------------------  */

  add(data) {
    this.array.push(data)
  }

  /*  ------------------------------------------------------  */

  remove(data) {
    this.array = this.array.filter(item => item !== data)
  }

  /*  ------------------------------------------------------  */

  search(data) {
    return this.array.includes(data) ? this.array.indexOf(data) : null
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
    console.log(this.array.join(' '))
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const assert = require('assert')
const a = new Array()

assert.equal(a.size(), 0)
a.add(1)
a.add(23)
a.add(99)
a.add(100)
a.add('hi')
assert.equal(a.size(), 5)
assert.equal(a.getAtIndex(0), 1)
assert.equal(a.getAtIndex(4), 'hi')
a.add(100)
assert.equal(a.size(), 6)
a.remove(100)
assert.equal(a.size(), 4)
assert.equal(a.search('hi'), 3)
assert.equal(a.search('not in array'), null)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
