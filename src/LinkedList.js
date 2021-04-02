function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  // Linked list is and object of objects
  // {head: {next: tail, value: {next: tail, value: 5}}, tail: {next: null, value: 5}}

  appendToTail(newValue) {
    //return a node
    //call function node with a value

    if (this.head === undefined) {
      this.head = new Node(newValue);
      this.tail = this.head;
      return this.tail;
    } else {
      const newNode = new Node(newValue);
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this.tail;
  }

  removeHead() {
    let oldHead = this.head;
    this.head = this.head.next;
    return oldHead;
  }

  findNode(value) {
    let current = this.head;

    while (current.next !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  forEach(callback) {}

  print() {}

  insertHead(value) {}

  insertAfter(refNode, value) {}

  removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|X  appendToTail: constant       X
|X  removeHead: constant         X
|X  findNode: Linear             X
|X                               X
|X                               X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
