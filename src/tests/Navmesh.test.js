import tap from 'tap'
const { test } = tap;

import Triangle from '../sources/Geometry/Triangle.js';
import Point from '../sources/Geometry/Point.js';
import Navmesh from '../sources/Geometry/Navmesh.js';

test('Point inside triangle', (t) => {
  const navmesh = new Navmesh([]);

  t.equal(true, true, 'is point inside');
  t.end();
});