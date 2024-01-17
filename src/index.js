import Polygon from './sources/Geometry/Polygon.js'
import canvas_DrawLine from './sources/Frontend/CanvasLine.js';
import Point from './sources/Geometry/Point.js';
import CanvasMain from './sources/Frontend/CanvasMain.js';
// const line = new Polygon();
// line.push(5, 4)

// line.display();

const canvasDOM = document.getElementById('canvas-drawer');

const canvas = new CanvasMain(canvasDOM);
canvas.startMouseListener();

canvas_DrawLine(new Point(10, 50), new Point(50, 10), canvasDOM);