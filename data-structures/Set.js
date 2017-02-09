
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
    console.log(`set: ${this.values.join(' ')}`)
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const assert = require('assert')
const s = new Set()

/*  ------------------------------------------------------  */

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
s.print()     //  => set: 1 99 hi

/*  ------------------------------------------------------  */

const s1 = new Set()
s1.add(1)
s1.add(23)
s1.add(99)
const s2 = new Set()
s2.add(23)
s2.add(99)
s2.add(100)
const s3 = s2.union(s1)
assert.equal(s3.size(), 4)
assert.equal(s3.contains(99), true)
s3.print()     //  => set: 1 23 99 100
const s4 = s2.intersect(s1)
s4.print()     //  => set: 23 99
const s5 = s2.difference(s1)
s5.print()     //  => set: 100
const s6 = s2.symmetricDifference(s1)
s6.print()     //  => set: 1 100
assert.equal(s.isSubset(s1), true)
assert.equal(s.isSubset(s2), false)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
