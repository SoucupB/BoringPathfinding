import Point from "./Point.js";

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    this.neighbours = [];
  }

  isPointInside(point) {
    const [p, a, b, c] = [point.y, point.x, this.a.y, this.a.x, this.b.y, this.b.x, this.c.y, this.c.x];

    const detT = (a - c) * (b - c) - (a - b) * (c - b);
    const alpha = ((b - c) * (p[1] - c[1]) - (a - c) * (p[0] - c[0])) / detT;
    const beta = ((a - c) * (p[1] - c[1]) - (b - c) * (p[0] - c[0])) / detT;
    const gamma = 1 - alpha - beta;

    return alpha > 0 && beta > 0 && gamma > 0;
  }
}

export default Triangle;