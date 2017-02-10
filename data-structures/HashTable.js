
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class HashTable {

  constructor() {
    this.memory = []
  }

  /*  ------------------------------------------------------  */

  hashKey(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      let code = key.charCodeAt(i)
      hash = ((hash << 5) - hash) + code | 0
    }
    return hash
  }

  /*  ------------------------------------------------------  */

  get(key) {
    const address = this.hashKey(key)
    return this.memory[address]
  }

  /*  ------------------------------------------------------  */

  set(key, value) {
    const address = this.hashKey(key)
    this.memory[address] = value
    return this
  }

  /*  ------------------------------------------------------  */

  remove(key) {
    const address = this.hashKey(key)
    if (this.memory[address]) {
      delete this.memory[address]
    }
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const assert = require('assert')

/*  ------------------------------------------------------  */

const ht = new HashTable()
ht.set('one', 1)
ht.set('two', 23)
ht.set('three', 99)
ht.set('four', 100)
ht.set('five', 'hi')
assert.equal(ht.get('one'), 1)
assert.equal(ht.get('three'), 99)
assert.equal(ht.get('five'), 'hi')
assert.equal(ht.get('missing'), undefined)
ht.remove('three')
assert.equal(ht.get('three'), undefined)
ht.set('three', 999)
assert.equal(ht.get('three'), 999)
assert.equal(ht.hashKey('test'), ht.hashKey('test'))


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
