
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const mergeSort = (arr) => {
  if (arr.length < 2) return arr
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

/*  ------------------------------------------------------  */

const merge = (left, right) => {
  const arr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return arr.concat(left).concat(right)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const arr = [3,2,4,6,7,0,1,8,5,9]
assert.deepEqual(mergeSort(arr), [0,1,2,3,4,5,6,7,8,9])

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
