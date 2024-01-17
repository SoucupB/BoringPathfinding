import Polygon from './sources/Geometry/Polygon.js'
import canvas_DrawLine from './sources/Frontend/CanvasLine.js';
import Point from './sources/Geometry/Point.js';

// const line = new Polygon();
// line.push(5, 4)

// line.display();
const canvas = document.getElementById('canvas-drawer');

canvas_DrawLine(new Point(10, 50), new Point(50, 10), canvas);