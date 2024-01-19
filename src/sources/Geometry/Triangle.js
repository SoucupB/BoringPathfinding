import Point from "./Point.js";

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    this.neighbours = [];
  }

  isPointInside(point) {
    const [x, y] = [point.x, point.y];
    const [x1, y1] = [this.a.x, this.a.y];
    const [x2, y2] = [this.b.x, this.b.y];
    const [x3, y3] = [this.c.x, this.c.y];

    const denominator = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);

    const alpha = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / denominator;
    const beta = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / denominator;
    const gamma = 1 - alpha - beta;

    return alpha > 0 && beta > 0 && gamma > 0;
  }
}

export default Triangle;