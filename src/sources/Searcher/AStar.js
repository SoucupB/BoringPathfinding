import Heap from "./Heap.js";

class AStar {
  constructor(generateNeighbours, uniqueID, edgeCost) {
    this.generateNeighbours = generateNeighbours;
    this.uniqueID = uniqueID;
    this.edgeCost = edgeCost;
    this.heap = new Heap((a, b) => {
      return a.cost < b.cost;
    });
    this.cost = null;
  }

  search(src, dst) {
    this.heap.push({
      node: src,
      cost: 0,
      parent: null
    });

    return this.search_t(dst);
  }

  retrieveTokens(dst) {
    let nodes = [];
    while(dst) {
      nodes.push(dst.node);
      dst = dst.parent;
    }
    return nodes.reverse();
  }

  search_t(dst) {
    this.visited = {};

    while(this.heap.size()) {
      let currentNode = this.heap.top();
      if(this.uniqueID(dst) == this.uniqueID(currentNode.node)) {
        return this.retrieveTokens(currentNode);
      }
      this.heap.pop();
      this.visited[this.uniqueID(currentNode.node)] = true;

      let neighbours = this.generateNeighbours(currentNode.node);

      for(let i = 0, c = neighbours.length; i < c; i++) {
        if(!(this.uniqueID(neighbours[i]) in this.visited)) {
          this.heap.push({
            cost: this.edgeCost(currentNode.node, neighbours[i]) + currentNode.cost,
            node: neighbours[i],
            parent: currentNode
          });
        }
      }
    }
    return null;
  }
}

export default AStar;