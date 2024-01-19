import Point from "../Geometry/Point.js"

class Drawer {
  // This canvas_DrawLine takes points that are normalised

  static canvas_GetNormalisedValue(point, canvas = document.getElementById('canvas-drawer')) {
    const height = canvas.height;
    const width = canvas.width;

    return new Point(point.y / 100.0 * height, point.x / 100.0 * width);
  }

  static canvas_DrawLine(a, b, canvas = document.getElementById('canvas-drawer'), color = '#00f') {
    const context = canvas.getContext('2d');

    context.strokeStyle = color; // Blue color
    context.lineWidth = 1;

    const normalisedStart = Drawer.canvas_GetNormalisedValue(a, canvas);
    const normalisedEnd = Drawer.canvas_GetNormalisedValue(b, canvas);

    context.beginPath();
    context.moveTo(normalisedStart.x, normalisedStart.y);
    context.lineTo(normalisedEnd.x, normalisedEnd.y);
    context.stroke();
  }

  static canvas_DrawCircle(point, radius, color = 'red', canvas = document.getElementById('canvas-drawer')) {
    const context = canvas.getContext('2d');
    const normalisedPoint = Drawer.canvas_GetNormalisedValue(point, canvas);

    context.beginPath();
    context.arc(normalisedPoint.x, normalisedPoint.y, radius, 0, 2 * Math.PI);
    
    context.strokeStyle = color;
    context.lineWidth = 2;
    context.stroke();
    context.closePath();
  }

}
export default Drawer;