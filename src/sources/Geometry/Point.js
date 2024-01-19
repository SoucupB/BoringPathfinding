class Point {
  constructor(y, x) {
    this.y = y;
    this.x = x;
  }

  arePointsEqual(point) {
    return Math.abs(point.x - this.x) <= 1e-5 &&
           Math.abs(point.y - this.y) <= 1e-5;
  }
}

export default Point;