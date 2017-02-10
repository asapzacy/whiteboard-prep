
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Set {

  constructor() {
    this.values = []
    this.length = 0
  }

  /*  ------------------------------------------------------  */

  add(value) {
    if (!this.values.includes(value)) {
      this.values.push(value)
      this.length += 1
    }
  }

  /*  ------------------------------------------------------  */

  remove(value) {
    if (this.values.includes(value)) {
      this.values.splice(this.values.indexOf(value), 1)
      this.length -= 1
    }
  }

  /*  ------------------------------------------------------  */

  contains(value) {
    return this.values.includes(value)
  }

  /*  ------------------------------------------------------  */

  union(s1) {
    const s2 = new Set()
    s1.values.forEach(item => s2.add(item))
    this.values.forEach(item => s2.add(item))
    return s2
  }

  /*  ------------------------------------------------------  */

  intersect(s1) {
    const s2 = new Set()
    this.values.forEach(item => {
      if (s1.contains(item)) {
        s2.add(item)
      }
    })
    return s2
  }

  /*  ------------------------------------------------------  */

  difference(s1) {
    const s2 = new Set()
    this.values.forEach(item => {
      if (!s1.contains(item)) {
        s2.add(item)
      }
    })
    return s2
  }

  /*  ------------------------------------------------------  */

  symmetricDifference(s1) {
    const s2 = new Set()
    s1.values.forEach(item => {
      if (!s2.contains(item) && !this.contains(item)) {
        s2.add(item)
      }
    })
    this.values.forEach(item => {
      if (!s2.contains(item) && !s1.contains(item)) {
        s2.add(item)
      }
    })
    return s2
  }

  /*  ------------------------------------------------------  */

  isSubset(s1) {
    return s1.values.every(item => this.contains(item))
  }

  /*  ------------------------------------------------------  */

  size() {
    return this.length
  }

  /*  ------------------------------------------------------  */

  print() {
    console.log(`Set: ${this.values.join(' ')}`)
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const assert = require('assert')

/*  ------------------------------------------------------  */

const s = new Set()
assert.equal(s.size(), 0)
s.add(1)
s.add(23)
s.add(99)
s.add(100)
s.add('hi')
assert.equal(s.size(), 5)
s.add(99)
s.add(99)
assert.equal(s.size(), 5)
s.remove(100)
assert.equal(s.size(), 4)
assert.equal(s.contains(100), false)
assert.equal(s.contains('hi'), true)
s.print()     //  => Set: 1 99 hi

/*  ------------------------------------------------------  */

const s2 = new Set()
s2.add(1)
s2.add(23)
s2.add(99)
const s3 = new Set()
s3.add(23)
s3.add(99)
s3.add(100)
const s4 = s3.union(s2)
assert.equal(s4.size(), 4)
assert.equal(s4.contains(99), true)
s4.print()     //  => Set: 1 23 99 100
const s5 = s3.intersect(s2)
s5.print()     //  => Set: 23 99
const s6 = s3.difference(s2)
s6.print()     //  => Set: 100
const s7 = s3.symmetricDifference(s2)
s7.print()     //  => Set: 1 100
assert.equal(s.isSubset(s2), true)
assert.equal(s.isSubset(s3), false)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
