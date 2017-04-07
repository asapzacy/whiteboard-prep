
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class Graph {

  constructor() {
    this.nodes = []
  }

  addNode(value) {
    this.nodes.push({ value, lines: [] })
  }

  find(value) {
    return this.nodes.find(node => node.value === value)
  }

  addLine(startValue, endValue) {
    let startNode = this.find(startValue)
    let endNode = this.find(endValue)
    if (!startNode || !endNode) {
      throw new Error('both nodes need to exist. . ')
    }
    startNode.lines.push(endNode)
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */

const assert = require('assert')

const g = new Graph()
g.addNode(1)
g.addNode(2)
console.log(g)
g.addLine(1,2)
console.log(g)

/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
