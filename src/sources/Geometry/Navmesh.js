import earcut from 'earcut';
import Triangle from './Triangle.js';

class Navmesh {
  constructor(polygon) {
    this.triangles = [];
    this.polygon = polygon;
  }

  createTriangles(triangleIndexes) {
    const points = this.polygon;
    for(let i = 0, c = triangleIndexes.length; i < c; i += 3) {
      this.triangles.push(new Triangle(points[triangleIndexes[i]], points[triangleIndexes[i + 1]], points[triangleIndexes[i + 2]]));
    }
  }
  
  triangulate() {
    let coords = [];

    for(let i = 0; i < this.polygon.length - 1; i++) {
      coords.push(this.polygon[i].y);
      coords.push(this.polygon[i].x);
    }
    this.createTriangles(earcut(coords));
  }

  isPointInside(point) {

  }
}

export default Navmesh;