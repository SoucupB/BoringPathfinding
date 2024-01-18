import Point from "../Geometry/Point.js";
import Polygon from "../Geometry/Polygon.js";
import canvas_DrawLine from "./CanvasLine.js";

class CanvasMain {
  constructor(canvas = null) {
    // normalised values between 0 and 100
    this.mouse = new Point(0, 0);
    this.canvas = canvas;

    this.boundingBox = canvas.getBoundingClientRect();
    this.polygon = new Polygon();
  }

  updateMousePosition(event, self) {
    if((event.clientX < self.boundingBox.x || event.clientY < self.boundingBox.y) || 
       (event.clientX > self.boundingBox.width || event.clientY > self.boundingBox.height)) {
      return ;
    }

    self.mouse.y = (event.clientY - self.boundingBox.y) / (self.boundingBox.height - self.boundingBox.y) * 100.0;
    self.mouse.x = (event.clientX - self.boundingBox.x) / (self.boundingBox.width - self.boundingBox.x) * 100.0;
  }

  reDraw() {
    for(let i = 0, c = this.polygon.lines.length - 1; i < c; i++) {
      canvas_DrawLine(this.polygon.lines[i], this.polygon.lines[i + 1]);
    }
  }

  pressLine(event, self) {
    self.polygon.push(self.mouse.y, self.mouse.x);
    self.reDraw();
  }

  startMouseListener() {
    document.addEventListener('mousemove', (event) => this.updateMousePosition(event, this)); 
    this.canvas.addEventListener("click", (event) => this.pressLine(event, this));
  }
}

export default CanvasMain;