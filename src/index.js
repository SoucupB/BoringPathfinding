import CanvasMain from './sources/Frontend/CanvasMain.js';

const canvasDOM = document.getElementById('canvas-drawer');

const canvas = new CanvasMain(canvasDOM);
canvas.startMouseListener();

document.getElementById('button-triangulate').addEventListener('click', () => {
  document.getElementById('deactivate-navmesh').disabled = false;
  canvas.triangulateMesh();
})

document.getElementById('clear-src-point').addEventListener('click', () => {
  canvas.clearSrcPoint();
})

document.getElementById('deactivate-navmesh').addEventListener('change', (event) => {
  canvas.disableInput();
})

document.getElementById('deactivate-navmesh').disabled = true