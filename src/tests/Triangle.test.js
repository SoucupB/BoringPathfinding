import tap from 'tap'
const { test } = tap;

import Triangle from '../sources/Geometry/Triangle.js';
import Point from '../sources/Geometry/Point.js';

test('Point inside triangle', (t) => {
  const triangle = new Triangle(
    new Point(0, 3),
    new Point(4, 4),
    new Point(1, 1),
  )
  t.equal(triangle.isPointInside(new Point(2, 3)), true, 'is point inside');
  t.end();
});

test('Point not inside triange', (t) => {
  const triangle = new Triangle(
    new Point(0, 3),
    new Point(4, 4),
    new Point(1, 1),
  )
  t.equal(triangle.isPointInside(new Point(2, 5)), false, 'is point inside');
  t.end();
});