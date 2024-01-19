import Point from "../Geometry/Point.js";
import Polygon from "../Geometry/Polygon.js";
import Drawer from "./CanvasLine.js";

class CanvasMain {
  constructor(canvas = null) {
    // normalised values between 0 and 100
    this.mouse = new Point(0, 0);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.boundingBox = canvas.getBoundingClientRect();
    this.polygon = new Polygon();
    this.triangulated = false;
    this.triangles = [];
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  updateMousePosition(event, self) {
    if((event.clientX < self.boundingBox.x || event.clientY < self.boundingBox.y) || 
       (event.clientX > self.boundingBox.width || event.clientY > self.boundingBox.height)) {
      return ;
    }

    self.mouse.y = (event.clientY - self.boundingBox.y) / (self.boundingBox.height - self.boundingBox.y) * 100.0;
    self.mouse.x = (event.clientX - self.boundingBox.x) / (self.boundingBox.width - self.boundingBox.x) * 100.0;
  }

  drawLines() {
    if(this.triangulated) {
      return ;
    }

    for(let i = 0, c = this.polygon.lines.length - 1; i < c; i++) {
      Drawer.canvas_DrawLine(this.polygon.lines[i], this.polygon.lines[i + 1]);
    }
  }

  triangulateMesh() {
    this.polygon.triangulate();

    this.triangulated = true;
  }

  triangulateMeshOnFrame() {
    if(!this.triangulated) {
      return ;
    }

    const triangleIndexes = this.polygon.getTriangleIndexes();
    const points = this.polygon.lines;

    for(let i = 0, c = triangleIndexes.length; i < c; i += 3) {
      Drawer.canvas_DrawLine(points[triangleIndexes[i]], points[triangleIndexes[i + 1]], this.canvas, 'red');
      Drawer.canvas_DrawLine(points[triangleIndexes[i + 1]], points[triangleIndexes[i + 2]], this.canvas, 'red');
      Drawer.canvas_DrawLine(points[triangleIndexes[i]], points[triangleIndexes[i + 2]], this.canvas, 'red');
    }
  }

  drawCircle() {
    const closestPoint = this.polygon.getClosestPoint(this.mouse);
    if(!closestPoint) {
      return ;
    }
    Drawer.canvas_DrawCircle(closestPoint[1], 9, 'red', this.canvas);
  }

  onFrame(self) {
    self.clearCanvas();
    self.drawLines();
    self.drawCircle();
    self.triangulateMeshOnFrame();

    self.nextFrame();
  }

  nextFrame() {
    setTimeout(() => this.onFrame(this), 64);
  }

  pressLine(_, self) {
    const closestPoint = self.polygon.getClosestPoint(self.mouse);
    if(!closestPoint) {
      self.polygon.push(self.mouse.y, self.mouse.x);
      return ;
    }
    self.polygon.pushIndex(closestPoint[0]);
  }

  startMouseListener() {
    document.addEventListener('mousemove', (event) => this.updateMousePosition(event, this)); 
    this.canvas.addEventListener("click", (event) => this.pressLine(event, this));
    this.nextFrame();
  }
}

export default CanvasMain;