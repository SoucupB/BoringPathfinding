class AStar {
  constructor(navmesh) {
    this.navmesh = navmesh;
  }

  search(src, dst) {
    let visited = {};
    let triangleTrail = [];
    visited[src.id] = 1;

    this.search_t(src, dst, triangleTrail, visited, [false]);

    return triangleTrail;
  }

  search_t(node, dst, triangleTrail = [], visited = {}, trailFound = [false]) {
    if(node.id == dst.id) {
      trailFound[0] = true;
      return ;
    }

    for(let i = 0, c = node.neighbours.length; i < c; i++) {
      const nextNode = node.neighbours[i];
      if(!trailFound[0] && !(nextNode.id in visited)) {
        triangleTrail.push(nextNode);
        visited[nextNode.id] = 1;
        this.search_t(nextNode, dst, triangleTrail, visited);
        triangleTrail.pop();
      }
    }
  }
}

export default AStar;