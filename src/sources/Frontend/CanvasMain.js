import Point from "../Geometry/Point.js";
import Polygon from "../Geometry/Polygon.js";
import Drawer from "./CanvasLine.js";
import Search from "../Searcher/Search.js";

class CanvasMain {
  constructor(canvas = null) {
    // normalised values between 0 and 100
    this.mouse = new Point(0, 0);
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.boundingBox = canvas.getBoundingClientRect();
    this.polygon = new Polygon();
    this.srcPoint = null;
    this.searcher = null;
    this.pathFound = null;
    this.displayFlag = {
      triangulated: false
    }
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  updateMousePosition(event) {
    if((event.clientX < this.boundingBox.x || event.clientY < this.boundingBox.y) || 
       (event.clientX > this.boundingBox.width + this.boundingBox.x || event.clientY > this.boundingBox.height + this.boundingBox.y)) {
      return ;
    }

    this.mouse.y = (event.clientY - this.boundingBox.y) / (this.boundingBox.height) * 100.0;
    this.mouse.x = (event.clientX - this.boundingBox.x) / (this.boundingBox.width) * 100.0;
  }

  processMouseMovement(event, self) {
    self.updateMousePosition(event);
    self.searchPath();
  }

  searchPath() {
    if(!this.searcher || !this.srcPoint) {
      return ;
    }
    this.pathFound = this.searcher.getPointsPath(this.srcPoint, this.mouse);
  }

  disableInput() {
    this.displayFlag.triangulated = !this.displayFlag.triangulated;
  }

  drawMidPoints() {
    if(!this.pathFound) {
      return ;
    }
    
    for(let i = 0, c = this.pathFound.length - 1; i < c; i++) {
      Drawer.canvas_DrawLine(this.pathFound[i], this.pathFound[i + 1], this.canvas, 'orange');
    }
  }

  drawLines() {
    if(this.displayFlag.triangulated) {
      return ;
    }

    for(let i = 0, c = this.polygon.lines.length - 1; i < c; i++) {
      Drawer.canvas_DrawLine(this.polygon.lines[i], this.polygon.lines[i + 1]);
    }
  }

  triangulateMesh() {
    this.polygon.triangulate();
    this.searcher = new Search(this.polygon);
    this.displayFlag.triangulated = true;
  }

  triangulateMeshOnFrame() {
    if(!this.displayFlag.triangulated) {
      return ;
    }

    const triangleIndexes = this.polygon.getTriangleIndexes();

    for(let i = 0, c = triangleIndexes.length; i < c; i++) {
      const triangle = triangleIndexes[i];
      Drawer.canvas_DrawLine(triangle.a, triangle.b, this.canvas, 'red');
      Drawer.canvas_DrawLine(triangle.b, triangle.c, this.canvas, 'red');
      Drawer.canvas_DrawLine(triangle.a, triangle.c, this.canvas, 'red');
    }
  }

  drawCircle() {
    if(this.searcher) {
      return ;
    }
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
    self.drawMidPoints();

    self.nextFrame();
  }

  nextFrame() {
    setTimeout(() => this.onFrame(this), 64);
  }

  addPointToPolygon() {
    const closestPoint = this.polygon.getClosestPoint(this.mouse);
    if(!closestPoint) {
      this.polygon.push(this.mouse.y, this.mouse.x);
      return ;
    }
    if(closestPoint[0] == 0) {
      this.polygon.closePolygon();
    }
  }

  selectTriangle() {
    if(!this.searcher) {
      return ;
    }
    this.srcPoint = new Point(this.mouse.y, this.mouse.x);
  }

  clearSrcPoint() {
    this.srcPoint = null;
    this.pathFound = null;
  }

  processClickRequest(_, self) {
    self.addPointToPolygon();
    self.selectTriangle();
  }

  startMouseListener() {
    document.addEventListener('mousemove', (event) => this.processMouseMovement(event, this)); 
    this.canvas.addEventListener("click", (event) => this.processClickRequest(event, this));
    this.nextFrame();
  }
}

export default CanvasMain;