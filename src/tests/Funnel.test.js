import tap from 'tap'
const { test } = tap;
import Funnel from '../sources/Searcher/Funnel.js';
import Triangle from '../sources/Geometry/Triangle.js';
import Point from '../sources/Geometry/Point.js';

test('Push 2 lines', (t) => {
  const totalPath = [
    new Triangle(
      new Point(0, 0),
      new Point(1, 3),
      new Point(0, 3),
    ),
    new Triangle(
      new Point(0, 0),
      new Point(1, 3),
      new Point(2, 3),
    ),
    new Triangle(
      new Point(0, 0),
      new Point(2, 3),
      new Point(3, 3),
    ),
    new Triangle(
      new Point(0, 0),
      new Point(1, -2),
      new Point(3, 3),
    ),
    new Triangle(
      new Point(1, -2),
      new Point(3, -3),
      new Point(3, 3),
    ),
  ]

  let funnel = Funnel.construct(totalPath);
  t.equal(funnel.lines.length, 8, '8 points');
  t.end();
});