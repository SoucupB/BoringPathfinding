import earcut from 'earcut';

class Navmesh {
  constructor(polygon) {
    this.triangles = [];
    this.polygon = polygon;
  }
  
  triangulate() {
    let coords = [];

    for(let i = 0; i < this.polygon.length - 1; i++) {
      coords.push(this.polygon[i].y);
      coords.push(this.polygon[i].x);
    }
    this.triangles = earcut(coords);
  }
}

export default Navmesh;