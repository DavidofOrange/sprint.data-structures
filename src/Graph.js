class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(vertex) {
    this.nodes[vertex] = [];
  }

  contains(vertex) {
    if (this.nodes[vertex]) {
      return true;
    } else return false;
  }

  removeNode(vertex) {
    delete this.nodes[vertex];
    //this.nodes = {3: [5, 6], 6: [3]}
    for (let item in this.nodes) {
      if (this.nodes[item].includes(vertex)) {
        let index = this.nodes[item].indexOf(vertex);
        this.nodes[item].splice(index, 1);
      }
    }
    // we have to work on adding Edges first, before removing them.
  }

  addEdge(vertex1, vertex2) {
    if (this.nodes[vertex1] && !this.nodes[vertex1].includes(vertex2)) {
      this.nodes[vertex1].push(vertex2);
      if (this.nodes[vertex2] && !this.nodes[vertex2].includes(vertex1)) {
        this.nodes[vertex2].push(vertex1);
      }
    }

    return "Invalid node value";
  }
  removeEdge(vertex1, vertex2) {
    if (this.nodes[vertex1].includes(vertex2)) {
      let index = this.nodes[vertex1].indexOf(vertex2);
      this.nodes[vertex1].splice(index, 1);
    }
    if (this.nodes[vertex2].includes(vertex1)) {
      let index = this.nodes[vertex2].indexOf(vertex1);
      this.nodes[vertex2].splice(index, 1);
    }
  }
  hasEdge(vertex1, vertex2) {
    if (
      this.nodes[vertex1].includes(vertex2) &&
      this.nodes[vertex2].includes(vertex1)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
/* if (this.nodes[item].includes(vertex)) {
        let index = this.nodes[item].indexOf(vertex);
        this.nodes[item].splice(index, 1);*/
// {5: [6], 6: [5]}
//
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|X  addNode: Constant            X
|X  addEdge                      X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/

module.exports = Graph;
