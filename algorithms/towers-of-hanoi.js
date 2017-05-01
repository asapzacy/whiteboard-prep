
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

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
