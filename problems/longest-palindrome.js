
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const longestPalindrome = (str) => {
  if (!str) return str
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const pal = expandAroundCenter(str, i, i)
    if (pal.length >= result.length) {
      result = pal
    }
    const pal2 = expandAroundCenter(str, i, i + 1)
    if (pal2.length >= result.length) {
      result = pal2
    }
  }
  return result.length > 1 ? result : str[0]
}

/*  ------------------------------------------------------  */

const expandAroundCenter = (str, left, right) => {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--
    right++
  }
  return str.slice(left + 1, right)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const str = 'My dad is a racecar athlete'
assert.equal(longestPalindrome(str), 'a racecar a')
const str2 = ''
assert.equal(longestPalindrome(str2), '')
const str3 = 'abcedfghijklmnopqrstuvwxyz'
assert.equal(longestPalindrome(str3), 'a')
const str4 = 'babad'
assert.equal(longestPalindrome(str4), 'aba')
const str5 = 'cbbd'
assert.equal(longestPalindrome(str5), 'bb')
const str6 = 'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
assert.equal(longestPalindrome(str6), 'ranynar')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
