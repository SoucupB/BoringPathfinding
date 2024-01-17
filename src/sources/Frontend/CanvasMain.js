import Point from "../Geometry/Point.js";

class CanvasMain {
  constructor(canvas = null) {
    this.mouse = null;
    this.canvas = canvas;

    this.boundingBox = canvas.getBoundingClientRect();
  }

  updateMousePosition(event, self) {
    if((event.clientX < self.boundingBox.x || event.clientY < self.boundingBox.y) || 
       (event.clientX > self.boundingBox.width || event.clientY > self.boundingBox.height)) {
      return ;
    }

    self.mouse = new Point((event.clientY - self.boundingBox.y) / (self.boundingBox.height - self.boundingBox.y) * 100.0,
                            (event.clientX - self.boundingBox.x) / (self.boundingBox.width - self.boundingBox.x) * 100.0),
  }

  startMouseListener() {
    document.addEventListener('mousemove', (event) => this.updateMousePosition(event, this)); 
  }
}

export default CanvasMain;