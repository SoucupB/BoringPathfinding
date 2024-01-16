import tap from 'tap'
const { test } = tap;
import Polygon from '../sources/Polygon.js';

// test('Push 2 lines', (t) => {
//   const polygon = new Polygon();
//   polygon.push(0, 0);
//   polygon.push(0, 5);
//   polygon.push(5, 5);

//   t.equal(polygon.linesCount(), 2, '2 lines');
//   t.end();
// });

test('Non crossing lines', (t) => {
  const polygon = new Polygon();
  let points = [[0, 0], [0, 5], [5, 5], [3, 3]]
  for(let i = 0; i < points.length; i++) {
    t.equal(polygon.push(points[i][0], points[i][1]), true, `push point ${i}`);
  }
  t.end();
});