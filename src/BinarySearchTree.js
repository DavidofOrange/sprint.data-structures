class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  /* First Idea, While Loop. We were not able to make this one work.7
    insert(value) {
     // make a new BinarySearchTree
     // check value against value of root
     // if smaller, put in left
     // if bigger, put in right
    
     let rootTree = this;
     let newTree = new BinarySearchTree(value)

     if (rootTree.value > newTree.value && rootTree.left === undefined){
       rootTree.left = newTree;
     } else if (rootTree.value < newTree.value && rootTree.right === undefined) {
         rootTree.right = newTree;
     } else if (rootTree.value > newTree.value && rootTree.left !== undefined) {
        while(rootTree.left !== )
     } else if (rootTree.value < newTree.value && rootTree.right !== undefined) {

     }
        
     // if rootTree.value > newTree.value 
     return rootTree;
    
    }
    */

  // Second Idea, Recursion. This one works.
  insert(value, startingPoint) {
    // make a new BinarySearchTree
    // check value against value of root
    // if smaller, put in left
    // if bigger, put in right
    let rootTree = this;
    let newTree = new BinarySearchTree(value);

    if (startingPoint !== undefined) {
      rootTree = startingPoint;
    }
    if (rootTree.value > newTree.value && rootTree.left === undefined) {
      rootTree.left = newTree;
    } else if (rootTree.value < newTree.value && rootTree.right === undefined) {
      rootTree.right = newTree;
    } else if (rootTree.value > newTree.value && rootTree.left !== undefined) {
      this.insert(value, rootTree.left);
    } else if (rootTree.value < newTree.value && rootTree.right !== undefined) {
      this.insert(value, rootTree.right);
    }
    return rootTree;
  }

  contains(value) {
    let currentTree = this;

    while (currentTree) {
      if (value === currentTree.value) {
        return true;
      }

      if (value < currentTree.value) {
        currentTree = currentTree.left;
      } else if (value > currentTree.value) {
        currentTree = currentTree.right;
      }
    }
    return false;
  }

  traverseDepthFirstInOrder(callback) {
    if (this.left !== undefined) {
      this.left.traverseDepthFirstInOrder(callback);
    }
    callback(this);
    if (this.right !== undefined) {
      this.right.traverseDepthFirstInOrder(callback);
    }
  }
}
/*


|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|X  insert: Linear               X
|X  contains: Logarithmic        X
|X  traverse: Logarithmic        X
|X                               X
|X                               X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

/*
     O value: 5
    /       \
   children children 
    value: 6    value:2



      O value: 10
    /           \
    left        right
    value: 5    value: 15

*/

module.exports = { BinarySearchTree };
