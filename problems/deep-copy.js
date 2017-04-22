
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const deepCopy = (input) => {
  if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    return input
  } else {
    let output
    if (Array.isArray(input)) {
      output = []
      for (let i = 0; i < input.length; i++) {
        output[i] = deepCopy(input[i])
      }
    } else {
      output = {}
      for (let key in input) {
        if (input.hasOwnProperty(key)) {
          output[key] = deepCopy(input[key])
        }
      }
    }
    return output
  }
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

//  original object
const obj = {
  name: 'zac',
  age: 23,
  family: [ 'scott', 'zac', 'eric', 'jenny', [ 'dad', 'mom' ]],
  locations: {
    az: [ 'tucson', 'oro valley' ],
    ca: [ 'fremont', 'pleasanton' ]
  }
}
//  copy object
const obj2 = deepCopy(obj)
assert.deepStrictEqual(obj, obj2)             //  same
obj2.age += 1                                 //  change property on copy
assert.notDeepStrictEqual(obj, obj2)          //  not same
assert.equal(obj.age, 23)                     //  original object didn't change
assert.equal(obj2.age, 24)                    //  copy object did change

//  original array
const arr = [ 'one', true, 99, { name: 'zac' }, 'hi' ]
//  copy array
const arr2 = deepCopy(arr)
assert.deepStrictEqual(arr, arr2)             //  same
arr2[3].name = arr2[3].name.toUpperCase()     //  change a property on copy
assert.notDeepStrictEqual(arr, arr2)          //  not same
assert.equal(arr[3].name, 'zac')              //  original array didn't change
assert.equal(arr2[3].name, 'ZAC')             //  copy array did change

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
