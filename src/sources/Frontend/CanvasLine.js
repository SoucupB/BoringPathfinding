import Point from "../Geometry/Point.js"

const canvas_DrawLine = (a, b, canvas = document.getElementById('canvas-drawer')) => {
  const context = canvas.getContext('2d');
  const canvasRect = canvas.getBoundingClientRect();

  const height = canvas.height;
  const width = canvas.width;

  context.strokeStyle = '#00f'; // Blue color
  context.lineWidth = 2;

  const normalisedStart = new Point(a.y / 100.0 * height, a.x / 100.0 * width);
  const normalisedEnd = new Point(b.y / 100.0 * height, b.x / 100.0 * width);

  context.beginPath();
  context.moveTo(normalisedStart.y, normalisedStart.x);
  context.lineTo(normalisedEnd.y, normalisedEnd.x);
  context.stroke();
}

// This canvas_DrawLine takes points that are normalised
export default canvas_DrawLine;