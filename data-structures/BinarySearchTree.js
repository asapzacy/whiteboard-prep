
/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


class BinarySearchTree {

  constructor() {
    this.root = null
  }

  /*  ------------------------------------------------------  */

  //  check if binary search tree contains value.
  contains(value) {
    let current = this.root
    let found = false
    while (!found && current) {
      if (value < current.left) {
        current = current.left
      } else if (value > current.right) {
        current = current.right
      } else {
        found = true
      }
    }
    return found
  }

  /*  ------------------------------------------------------  */

  //  add node to a binary search tree.
  add(value) {
    const node = {
      value: value,
      left: null,
      right: null
    }
    if (this.root === null) {
      this.root = node
      return
    }
    let current = this.root
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node
          break
        } else {
          current = current.left
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node
          break
        } else {
          current = current.right
        }
      } else {
        break
      }
    }
  }

  /*  ------------------------------------------------------  */

  //  remove node from a binary search tree.
  remove(value) {
    let current = this.root
    let found = false
    let parent = null
    let childCount
    let replacement
    let replacementParent
    //  find the node
    while (!found && current) {
      if (value < current.value) {
        parent = current
        current = current.left
      } else if (value > current.value) {
        parent = current
        current = current.right
      } else {
        found = true
      }
    }
    //  node was found
    if (found) {
      childCount = (current.left ? 1 : 0) + (current.right ? 1 : 0)
      //  special case: value is at the root
      if (current === this.root) {
        switch(childCount) {
          case 0:
            this.root = null
            break
          case 1:
            this.root = current.right === null ? current.left : current.right
            break
          case 2:
            replacement = this.root.left
            while (replacement.right) {
              replacementParent = replacement
              replacement = replacement.right
            }
            if (replacementParent) {
              replacementParent.right = replacement.left
              replacement.right = this.root.right
              replacement.left = this.root.left
            } else {
              replacement.right = this.root.right
            }
            this.root = replacement
        }
        //  non-root values
      } else {
        switch(childCount) {
          case 0:
            if (current.value < parent.value) {
              parent.left = null
            } else {
              parent.right = null
            }
            break
          case 1:
            if (current.value < parent.value) {
              parent.left = current.left === null ? current.right : current.left
            } else {
              parent.right = current.left === null ? current.right : current.left
            }
            break
          case 2:
            replacement = current.left
            replacementParent = current
            while (replacement.right) {
              replacementParent = replacement
              replacement = replacement.right
            }
            replacementParent.right = replacement.left
            replacement.right = current.right
            replacement.left = current.left
            if (current.value < parent.value) {
              parent.left = replacement
            } else {
              parent.right = replacement
            }
        }
      }
    }
  }

  /*  ------------------------------------------------------  */

  //  helper function to traverse (in-order) a binary search tree and call function.
  traverse(fn) {
    const inOrder = (node) => {
      if (node) {
        if (node.left) {
          inOrder(node.left)
        }
        fn.call(this, node)
        if (node.right) {
          inOrder(node.right)
        }
      }
    }
    return inOrder(this.root)
  }

  /*  ------------------------------------------------------  */

  //  return height of a binary search tree.
  height(root) {
    if (root === null) return 0
    let leftTree = this.height(root.left)
    let rightTree = this.height(root.right)
    return Math.max(leftTree, rightTree) + 1
  }

  /*  ------------------------------------------------------  */

  //  return size of a binary search tree.
  size() {
    let count = 0
    this.traverse(node => count += 1)
    return count
  }

  /*  ------------------------------------------------------  */

  //  convert binary search tree to array.
  toArray() {
    const arr = []
    this.traverse(node => arr.push(node.value))
    return arr
  }

  /*  ------------------------------------------------------  */

  //  convert binary search tree to a string.
  toString() {
    return this.toArray().toString()
  }

  /*  ------------------------------------------------------  */

  //  clear a binary search tree.
  clear() {
    this.root = null
  }

  /*  ------------------------------------------------------  */

  //  in-order traversal of a binary search tree.
  inOrderTraversal(root) {
    if (root.left) {
      this.inOrderTraversal(root.left)
    }
    console.log(root.value)
    if (root.right) {
      this.inOrderTraversal(root.right)
    }
  }

  /*  ------------------------------------------------------  */

  //  pre-order traversal of a binary search tree.
  preOrderTraversal(root) {
    console.log(root.value)
    if (root.left) {
      this.preOrderTraversal(root.left)
    }
    if (root.right) {
      this.preOrderTraversal(root.right)
    }
  }

  /*  ------------------------------------------------------  */

  //  post-order traversal of a binary search tree.
  postOrderTraversal(root) {
    if (root.left) {
      this.postOrderTraversal(root.left)
    }
    if (root.right) {
      this.postOrderTraversal(root.right)
    }
    console.log(root.value)
  }

  /*  ------------------------------------------------------  */

  //  find min value in a binary search tree.
  findMin() {
    let current = this.root
    while (current.left) {
      current = current.left
    }
    return current.value
  }

  /*  ------------------------------------------------------  */

  //  find max value in a binary search tree.
  findMax() {
    let current = this.root
    while (current.right) {
      current = current.right
    }
    return current.value
  }

}


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */


const bst = new BinarySearchTree()
bst.add(8)
bst.add(10)
bst.add(3)
bst.add(6)
bst.add(7)
bst.add(4)
bst.add(1)
bst.add(14)
bst.add(13)
console.log(bst)
console.log(bst.contains(7))


/*  ------------------------------------------------------  */
/*  ------------------------------------------------------  */
