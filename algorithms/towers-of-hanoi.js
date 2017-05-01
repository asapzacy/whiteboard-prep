
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const towersOfHanoi = (disc, A, B, C) => {
  if (disc === 1) {
    move(disc, A, C)
  } else {
    towersOfHanoi(disc - 1, A, C, B)
    move(disc, A, C)
    towersOfHanoi(disc - 1, B, A, C)
  }
}

//  helper function - logs every move
const move = (disc, from, to) => {
  console.log(`move disc ${disc} from ${from} to ${to}`)
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

towersOfHanoi(3, 'A', 'B', 'C')
// move disc 1 from A to C
// move disc 2 from A to B
// move disc 1 from C to B
// move disc 3 from A to C
// move disc 1 from B to A
// move disc 2 from B to C
// move disc 1 from A to C

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
