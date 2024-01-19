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

  getPointsPathFromTriangle(srcTriangle, dstTriangle, pathPoints = []) {
    let triangles = this.search(srcTriangle, dstTriangle);
    if(triangles.length <= 1) {
      return [srcTriangle];
    }
    let startingPoint = triangles[0].midPoint();
    pathPoints.push(startingPoint)

    let lastIndex = 0;
    let nextIndex = this.getNextPoint(startingPoint, 0, triangles);
    while(nextIndex != lastIndex) {
      startingPoint = triangles[nextIndex].midPoint()
      pathPoints.push(startingPoint);
      lastIndex = nextIndex;
      nextIndex = this.getNextPoint(startingPoint, nextIndex, triangles);
    }
    return pathPoints;
  }

  getPointsPath(src, dst) {
    const triangleSrc = this.polygon.getTriangle(src);
    if(!triangleSrc) {
      return null;
    }
    const triangleDst = this.polygon.getTriangle(dst);
    if(!triangleDst) {
      return null;
    }

    return [src, ...this.getPointsPathFromTriangle(triangleSrc, triangleDst), dst]
  }
}

export default AStar;