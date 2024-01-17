class CanvasHelper {
  constructor(canvas = null) {
    this.mouseX = 0;
    this.mouseY = 0;
    this.canvas = canvas;
  }

  updateMousePosition(event) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  startMouseListener() {
    document.addEventListener('mousemove', this.updateMousePosition); 
  }
}

export default CanvasHelper;