import Point from "../Geometry/Point.js";
import Polygon from "../Geometry/Polygon.js";
import Drawer from "./CanvasLine.js";
import AStar from "../Searcher/AStar.js";

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
    this.srcPoint = null;
    this.searcher = null;
    this.pathFound = null;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  updateMousePosition(event) {
    if((event.clientX < this.boundingBox.x || event.clientY < this.boundingBox.y) || 
       (event.clientX > this.boundingBox.width || event.clientY > this.boundingBox.height)) {
      return ;
    }

    this.mouse.y = (event.clientY - this.boundingBox.y) / (this.boundingBox.height - this.boundingBox.y) * 100.0;
    this.mouse.x = (event.clientX - this.boundingBox.x) / (this.boundingBox.width - this.boundingBox.x) * 100.0;
  }

  processMouseMovement(event, self) {
    self.updateMousePosition(event);
    self.searchPath();
  }

  searchPath() {
    if(!this.searcher || !this.srcPoint) {
      return ;
    }
    const triangleSrc = this.polygon.getTriangle(this.srcPoint);
    if(!triangleSrc) {
      return ;
    }
    const triangleDst = this.polygon.getTriangle(this.mouse);
    if(!triangleDst) {
      return ;
    }
    // this.pathFound = this.searcher.search(triangleSrc, triangleDst);
    this.pathFound = this.searcher.getPointsPath(triangleSrc, triangleDst);

    // console.log(this.searcher.getPointsPath(triangleSrc, triangleDst))
  }

  drawMidPoints() {
    if(!this.pathFound) {
      return ;
    }
    
    for(let i = 0, c = this.pathFound.length - 1; i < c; i++) {
      Drawer.canvas_DrawLine(this.pathFound[i], this.pathFound[i + 1]);
    }
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
    this.searcher = new AStar(this.polygon);
    this.triangulated = true;
  }

  triangulateMeshOnFrame() {
    if(!this.triangulated) {
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
    if(this.triangulated) {
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
    this.polygon.pushIndex(closestPoint[0]);
  }

  selectTriangle() {
    if(!this.triangulated) {
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