import Point from './Point.js'
import earcut from 'earcut';
import Triangle from './Triangle.js';
import Navmesh from './Navmesh.js';

class Polygon {
  constructor() {
    this.lines = [];
    this.holes = [];
    this.autocompletePointDistance = 3;
    this.complete = false;

    this.navmesh = null;
  }

  areSegmentsIntersecting(A, B, C, D) {
    const orientation = (p, q, r) => {
      const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
      if (val === 0) return 0;
      return val > 0 ? 1 : 2;
    };
  
    const onSegment = (p, q, r) => {
      return (
        q.x <= Math.max(p.x, r.x) &&
        q.x >= Math.min(p.x, r.x) &&
        q.y <= Math.max(p.y, r.y) &&
        q.y >= Math.min(p.y, r.y)
      );
    };
  
    const o1 = orientation(A, B, C);
    const o2 = orientation(A, B, D);
    const o3 = orientation(C, D, A);
    const o4 = orientation(C, D, B);

    if (o1 !== o2 && o3 !== o4) {
      return true;
    }
  
    if (o1 === 0 && onSegment(A, C, B)) return true;
    if (o2 === 0 && onSegment(A, D, B)) return true;
    if (o3 === 0 && onSegment(C, A, D)) return true;
    if (o4 === 0 && onSegment(C, B, D)) return true;
  
    return false;
  }

  _canPointBePushed(point, startingPoint = 0) {
    if(this.lines.length <= 2) {
      return true;
    }

    for(let i = startingPoint, c = this.lines.length - 2; i < c; i++) {
      if(this.areSegmentsIntersecting(this.lines[i], this.lines[i + 1], this.lines[c + 1], point)) {
        return false
      }
    }
    return true;
  }

  push(y, x, woChecker = false) {
    if(this.complete) {
      return true;
    }
    const point = new Point(y, x);
    if(!woChecker && !this._canPointBePushed(point)) {
      return false;
    }
    this.lines.push(point)
    return true;
  }

  distancef(a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
  }

  getClosestPoint(point) {
    for(let i = 0, c = this.lines.length - 1; i < c; i++) {
      if(point.distancef(this.lines[i]) <= this.autocompletePointDistance) {
        return [i, this.lines[i]];
      }
    }
    return null;
  }

  pushIndex(index) {
    if(this.complete || index != 0 || this.lines.length < 2) {
      return false;
    }
    const point = this.lines[0];
    if(!this._canPointBePushed(point, 1)) {
      return false;
    }
    this.push(this.lines[0].y, this.lines[0].x, true);
    this.complete = true;
    return true;
  }

  getTriangle(point) {
    return this.navmesh.getTriangle(point);
  }

  linesCount() {
    return Math.max(0, this.lines.length - 1);
  }

  triangulate() {
    if(!this.complete) {
      return [];
    }
    this.navmesh = new Navmesh(this.lines);
    this.navmesh.triangulate();
  }

  getTriangleIndexes() {
    if(!this.navmesh) {
      return null;
    }
    return this.navmesh.triangles;
  }

  display() {
    console.log(this.lines)
  }
}

export default Polygon;