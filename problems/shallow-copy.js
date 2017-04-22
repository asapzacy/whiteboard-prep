
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const shallowCopy = (input) => {
  let output
  if (typeof input === 'string' || typeof input === 'number' || typeof input === 'boolean') {
    output = input
  } else {
    if (Array.isArray(input)) {
      output = []
      for (let i = 0; i < input.length; i++) {
        output[i] = input[i]
      }
    } else {
      output = {}
      for (let key in input) {
        if (input.hasOwnProperty(key)) {
          output[key] = input[key]
        }
      }
    }
  }
  return output
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = [{ 'a': 1 }, { 'b': 2 }]          //  original array
const arr2 = shallowCopy(arr)                 //  copy array
assert.deepStrictEqual(arr, arr2)             //  same
arr2[0].a -= 1                                //  change property on copy
arr2[0].c = 3                                 //  add property on copy
assert.deepStrictEqual(arr, arr2)             //  still same
assert.equal(arr[0].a, 0)                     //  original array did change
assert.equal(arr2[0].a, 0)                    //  copy array did change
assert.equal(arr[0].c, 3)                     //  original array did change
assert.equal(arr2[0].c, 3)                    //  copy array did change

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
