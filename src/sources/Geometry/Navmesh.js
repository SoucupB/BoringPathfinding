import earcut from 'earcut';
import Triangle from './Triangle.js';

class Navmesh {
  constructor(polygon) {
    this.triangles = [];
    this.polygon = polygon;
    this.triangleID = 0;
  }

  createTriangles(triangleIndexes) {
    const points = this.polygon;
    for(let i = 0, c = triangleIndexes.length; i < c; i += 3) {
      this.triangles.push(new Triangle(points[triangleIndexes[i]], points[triangleIndexes[i + 1]], points[triangleIndexes[i + 2]], this.triangleID++));
    }
  }

  createNeighbours() {
    let triangleCheck = {};
    if(!this.triangles.length) {
      return ;
    }
    this.createNeighbours_t(this.triangles[0], triangleCheck);
  }

  createNeighbours_t(currentTriangle, triangleCheck = {}) {
    if(currentTriangle.id in triangleCheck) {
      return ;
    }
    for(let i = 0, c = this.triangles.length; i < c; i++) {

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

  getTriangle(point) {
    const triangles = this.triangles;
    for(let i = 0, c = triangles.length; i < c; i++) {
      if(triangles.isPointInside(point)) {
        return triangles;
      }
    }
    return null;
  }
}

export default Navmesh;