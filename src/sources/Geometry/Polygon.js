import Point from './Point.js'
import Navmesh from './Navmesh.js';

class Polygon {
  constructor(points = []) {
    this.lines = points;
    this.holes = [];
    this.autocompletePointDistance = 3;
    this.complete = false;

    this.navmesh = null;
  }

  _canPointBePushed(point, startingPoint = 0) {
    if(this.lines.length <= 2) {
      return true;
    }

    for(let i = startingPoint, c = this.lines.length - 2; i < c; i++) {
      if(Point.areSegmentsIntersecting(this.lines[i], this.lines[i + 1], this.lines[c + 1], point)) {
        return false
      }
    }
    return true;
  }

  doesSegmentIntersects(start, end) {
    for(let i = 0, c = this.lines.length; i < c; i++) {
      if(Point.areSegmentsIntersecting(this.lines[i], this.lines[(i + 1) % c], start, end)) {
        return true
      }
    }
    return false;
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

  static print(polygon) {
    let resp = [];
    for(let i = 0, c = polygon.lines.length; i < c; i++) {
      resp.push(`(${polygon.lines[i].y},${polygon.lines[i].x})`);
    }
    console.log(resp.join(','))
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