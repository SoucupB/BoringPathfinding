import Heap from "./Heap.js";

class AStar {
  constructor(generateNeighbours = (_) => {
    return [];
  }, uniqueID = (a) => {
    return a;
  }, nodesDistanceMethod = (a, b) => {
    return a < b;
  }) {
    this.generateNeighbours = generateNeighbours;
    this.uniqueID = uniqueID;
    this.visited = {};
    this.heap = new Heap(nodesDistanceMethod);
  }

  search(src, dst) {
    let nodes = [];
    this.heap.push(src);

    return this.search_t(dst, nodes);
  }

  search_t(dst, nodes) {
    while(this.heap.size()) {
      let currentNode = this.heap.top();
      if(this.uniqueID(dst) == this.uniqueID(currentNode)) {
        return nodes;
      }
      
      this.heap.pop();
      nodes.push(currentNode);
      this.visited[this.uniqueID(currentNode)] = true;

      let neighbours = this.generateNeighbours(currentNode);

      for(let i = 0, c = neighbours.length; i < c; i++) {
        if(!(this.uniqueID(neighbours[i]) in this.visited)) {
          this.heap.push(neighbours[i]);
        }
      }
    }
    return null;
  }
}

export default AStar;