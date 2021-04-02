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
    // we have to work on adding Edges first, before removing them.
  }

  addEdge(vertex1, vertex2) {}
}

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
