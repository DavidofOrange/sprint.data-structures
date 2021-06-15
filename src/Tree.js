const { find } = require("underscore");

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    this.children.push(new Tree(value));
  }

  contains(value) {
    let current = this;
    let result = false;
 
    /*
    while (current.children.length !== 0) {
      if (current.value === value) {
        return true;
      }
      current = current.children[0];
    }
    return false;
    */
    function findChildren(treeObj) {
      if (treeObj.value === value) {
        result = true;
        return result;
      }

      if (treeObj.children.length !== 0) {
        for (let child of treeObj.children) {
          if (child.value === value) {
            result = true;
            return result;
          } else findChildren(child);
        }
      }
    }

    findChildren(current);
    return result;
    /*
    for (let child in current) {
      if (child.value === value) {
        return true}
      }
    }
    */
  }
  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|X  addChild: constant           X
|X  contains: Linear             X
|X                               X
|X                               X
|X                               X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Tree;
