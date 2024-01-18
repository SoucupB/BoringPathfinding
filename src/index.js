import Polygon from './sources/Geometry/Polygon.js'
import Point from './sources/Geometry/Point.js';
import CanvasMain from './sources/Frontend/CanvasMain.js';

const canvasDOM = document.getElementById('canvas-drawer');

const canvas = new CanvasMain(canvasDOM);
canvas.startMouseListener();