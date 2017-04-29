
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


//  take 1. - with hash table
const validParentheses = (str) => {
  const braces = { '(': ')', '[': ']', '{': '}' }
  const s = []
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    if (braces[ch]) {
      s.push(ch)
    } else if (Object.values(braces).includes(ch)) {
      const opening = s[s.length - 1]
      if (ch === braces[opening]) {
        s.pop()
      } else {
        return false
      }
    }
  }
  return !s.length
}

/*  ------------------------------------------------------  */

//  take 2. - with opening / closing arrays
const validParentheses2 = (str) => {
  const opening = [ '[', '(', '{' ]
  const closing = [ ']', ')', '}' ]
  const s = []
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    if (opening.includes(ch)) {
      s.push(ch)
    } else if (closing.includes(ch)) {
      const index = closing.indexOf(ch)
      if (opening[index] === s[s.length - 1]) {
        s.pop()
      } else {
        return false
      }
    }
  }
  return !s.length
}

/*  ------------------------------------------------------  */

//  take 3. - add closing brace to the stack
const validParentheses3 = (str) => {
  const s = []
  for (let i = 0; i < str.length; i++) {
    const ch = str[i]
    if (ch === '(' || ch === '[' || ch === '{') {
      s.push(opposite(ch))
    } else if (ch === ')' || ch === ']' || ch === '}') {
      if (ch === s[s.length - 1]) {
        s.pop()
      } else {
        return false
      }
    }
  }
  return !s.length
}

//  helper function - returns the closing brace
const opposite = (ch) => {
  switch (ch) {
    case '(': return ')'
    case '[': return ']'
    case '{': return '}'
  }
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert');

assert.equal(validParentheses('['), false)
assert.equal(validParentheses('()'), true)
assert.equal(validParentheses('{}[]()'), true)
assert.equal(validParentheses('{[}]'), false)
assert.equal(validParentheses(['{}[]()']), true)
assert.equal(validParentheses(['[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]']), true)
assert.equal(validParentheses2('['), false)
assert.equal(validParentheses2('()'), true)
assert.equal(validParentheses2('{}[]()'), true)
assert.equal(validParentheses2('{[}]'), false)
assert.equal(validParentheses2(['{}[]()']), true)
assert.equal(validParentheses2(['[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]']), true)
assert.equal(validParentheses3('['), false)
assert.equal(validParentheses3('()'), true)
assert.equal(validParentheses3('{}[]()'), true)
assert.equal(validParentheses3('{[}]'), false)
assert.equal(validParentheses3(['{}[]()']), true)
assert.equal(validParentheses3(['[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]']), true)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
