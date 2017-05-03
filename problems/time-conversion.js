
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

//  12-hour clock --> 24-hour clock
const timeConversionTo24 = (str) => {
  const time = str.split(':')
  let hh = time[0]
  let mm = time[1]
  let ss = time[2].slice(0,2)
  const period = time[2].slice(-2)
  if (period === 'PM') {
    hh = Number(hh) + 12
  } else if (period === 'AM' && hh === '12') {
    hh = Number(hh) - 12
  }
  return `${padZeroes(hh)}:${padZeroes(mm)}:${padZeroes(ss)}`
}

/*  ------------------------------------------------------  */

//  24-hour clock --> 12-hour clock
const timeConversionTo12 = (str) => {
  let [ hh, mm, ss ] = str.split(':')
  let period = 'AM'
  if (hh > 12) {
    hh = Number(hh) - 12
    period = 'PM'
  } else if (hh === '00') {
    hh = Number(hh) + 12
  }
  return `${padZeroes(hh)}:${padZeroes(mm)}:${padZeroes(ss)}${period}`
}

/*  ------------------------------------------------------  */

//  helper function to make sure there's always 2 digits
const padZeroes = (digits) => `0${digits}`.slice(-2)


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

assert.equal(timeConversionTo24('07:03:15PM'), '19:03:15')
assert.equal(timeConversionTo24('01:53:55AM'), '01:53:55')
assert.equal(timeConversionTo24('12:00:00AM'), '00:00:00')

assert.equal(timeConversionTo12('19:03:15'), '07:03:15PM')
assert.equal(timeConversionTo12('01:53:55'), '01:53:55AM')
assert.equal(timeConversionTo12('00:00:00'), '12:00:00AM')

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
