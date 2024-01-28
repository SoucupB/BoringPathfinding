import tap from 'tap'
const { test } = tap;

import Triangle from '../src/sources/Geometry/Triangle.js';
import Point from '../src/sources/Geometry/Point.js';
import Navmesh from '../src/sources/Geometry/Navmesh.js';

test('2 triangles for a square', (t) => {
  let navmesh = new Navmesh([
    new Point(
      0, 0
    ),
    new Point(
      1, 0
    ),
    new Point(
      1, 1
    ),
    new Point(
      0, 1
    ),
    new Point(
      0, 0
    ),
  ]);
  navmesh.triangulate();
  t.equal(navmesh.triangles.length, 2, '2 triangles');
  t.end();
});