
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const reverseLinkedList = (head) => {
  let current = head
  let nextNode = null
  let previous = null
  while (current) {
    nextNode = current.next
    current.next = previous
    previous = current
    current = nextNode
  }
  return previous
}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
