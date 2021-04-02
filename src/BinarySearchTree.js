class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  /*
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
}

/*


    while (current.next !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }


|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
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
