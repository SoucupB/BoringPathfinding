import tap from 'tap'
const { test } = tap;
import Polygon from '../sources/Polygon.js';

test('Addition test', (t) => {
  t.equal(2 + 2, 4, '2 + 2 should equal 4');
  t.end();
});

test('Subtraction test', (t) => {
  t.equal(5 - 3, 2, '5 - 3 should equal 2');
  t.end();
});