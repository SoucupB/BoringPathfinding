import Point from "../Geometry/Point.js";

class CanvasMain {
  constructor(canvas = null) {
    // normalised values between 0 and 100
    this.mouse = new Point(0, 0);
    this.canvas = canvas;

    this.boundingBox = canvas.getBoundingClientRect();
  }

  updateMousePosition(event, self) {
    if((event.clientX < self.boundingBox.x || event.clientY < self.boundingBox.y) || 
       (event.clientX > self.boundingBox.width || event.clientY > self.boundingBox.height)) {
      return ;
    }

    self.mouse.y = (event.clientY - self.boundingBox.y) / (self.boundingBox.height - self.boundingBox.y) * 100.0;
    self.mouse.x = (event.clientX - self.boundingBox.x) / (self.boundingBox.width - self.boundingBox.x) * 100.0;
  }

  startMouseListener() {
    document.addEventListener('mousemove', (event) => this.updateMousePosition(event, this)); 
  }
}

export default CanvasMain;