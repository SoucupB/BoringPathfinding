class AStar {
  constructor(polygon) {
    this.polygon = polygon;
    this.navmesh = polygon.navmesh;
  }

  search(src, dst) {
    let visited = {};
    let triangleTrail = [src];
    visited[src.id] = 1;

    this.search_t(src, dst, triangleTrail, visited, [false]);

    return triangleTrail;
  }

  search_t(node, dst, triangleTrail = [], visited = {}, trailFound) {
    if(node.id == dst.id) {
      trailFound[0] = true;
      return ;
    }
    for(let i = 0, c = node.neighbours.length; i < c; i++) {
      const nextNode = node.neighbours[i];
      if(!trailFound[0] && !(nextNode.id in visited)) {
        triangleTrail.push(nextNode);
        visited[nextNode.id] = 1;
        this.search_t(nextNode, dst, triangleTrail, visited, trailFound);
        if(!trailFound[0]) {
          triangleTrail.pop();
        }
      }
    }
  }

  getNextPoint(currentPoint, currentIndex, triangles) {
    let index = currentIndex;
    for(let i = currentIndex, c = triangles.length; i < c; i++) {
      if(!this.polygon.doesSegmentIntersects(currentPoint, triangles[i].midPoint())) {
        index = i;
        continue;
      }
      break;
    }
    return index;
  }

  getPointsPath(src, dst) {
    let triangles = this.search(src, dst);
    if(triangles.length <= 1) {
      return [src];
    }
    let startingPoint = triangles[0].midPoint();
    let resultingPoints = [startingPoint];

    let lastIndex = 0;
    let nextIndex = this.getNextPoint(startingPoint, 0, triangles);
    while(nextIndex != lastIndex) {
      startingPoint = triangles[nextIndex].midPoint()
      resultingPoints.push(startingPoint);
      lastIndex = nextIndex;
      nextIndex = this.getNextPoint(startingPoint, nextIndex, triangles);
    }
    return resultingPoints;
  }
}

export default AStar;