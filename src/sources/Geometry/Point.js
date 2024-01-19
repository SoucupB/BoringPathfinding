class Point {
  constructor(y, x) {
    this.y = y;
    this.x = x;
  }

  arePointsEqual(point) {
    return Math.abs(point.x - this.x) <= 1e-5 &&
           Math.abs(point.y - this.y) <= 1e-5;
  }

  distancef(point) {
    return Math.sqrt((this.x - point.x) * (this.x - point.x) + (this.y - point.y) * (this.y - point.y));
  }
}

export default Point;