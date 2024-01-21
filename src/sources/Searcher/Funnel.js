import Point from "../Geometry/Point.js";
import Polygon from "../Geometry/Polygon.js";
import Triangle from "../Geometry/Triangle.js";

class Line {
  constructor(pointA, pointB) {
    this.pointA = pointA;
    this.pointB = pointB;
  }

  jointPoints(line) {
    let points = [];
    let pointALine = [this.pointA, this.pointB];
    let pointBLine = [line.pointA, line.pointB];
    for(let i = 0; i < 2; i++) {
      for(let j = 0; j < 2; j++) {
        if(pointALine[i].arePointsEqual(pointBLine[j])) {
          points.push(pointALine[i]);
        }
      }
    }
    return points;
  }
}

class Funnel {
  constructor() {
  }

  static midLines(triangles) {
    let points = [];
    for(let i = 0, c = triangles.length; i < c; i++) {
      points.push(triangles[i].midPoint());
    }

    return points;
  }

  static doesMidLineIntersecLines(st, end, midLines) {
    for(let i = 0, c = midLines.length - 1; i < c; i++) {
      if(Point.areSegmentsIntersecting(st, end, midLines[i], midLines[i + 1])) {
        return true;
      }
    }
    return false;
  }

  static printFunnelLines(funnel) {
    let resp = [];
    for(let i = 0; i < funnel.length; i++) {
      resp.push(`(${funnel[i].pointA.y},${funnel[i].pointA.x}),(${funnel[i].pointB.y},${funnel[i].pointB.x})`);
    }

    console.log(resp.join('\n'))
  }

  static printFunnelPoints(funnel) {
    let resp = [];
    for(let i = 0, c = funnel.length; i < c; i++) {
      resp.push(`(${funnel[i].y},${funnel[i].x})`);
    }

    console.log(resp.join(','))
  }

  static printTrianglePoints(triangles) {
    let response = [];

    for(let i = 0, c = triangles.length; i < c; i++) {
      const triangle = triangles[i];
      let points = [triangle.a, triangle.b, triangle.c];
      for(let j = 0; j < points.length; j++) {
        for(let k = j + 1; k < points.length; k++) {
          response.push(`(${points[j].y},${points[j].x}),(${points[k].y},${points[k].x})`)
        }
      }
    }
    console.log(response.join(','))
  }

  static triangleToLines(triangle) {
    let points = [triangle.a, triangle.b, triangle.c];
    let lines = [];

    for(let i = 0; i < 2; i++) {
      for(let j = i + 1; j < 3; j++) {
        lines.push(new Line(points[i], points[j]));
      }
    }

    return lines;
  }

  static getValidLinesFromTriangle(triangle, midLines, hull = []) {
    let points = [triangle.a, triangle.b, triangle.c];

    for(let i = 0; i < 2; i++) {
      for(let j = i + 1; j < 3; j++) {
        if(!Funnel.doesMidLineIntersecLines(points[i], points[j], midLines)) {
          hull.push(new Line(points[i], points[j]));
        }
      }
    }
  }

  static sortHull_t(hull, lineCount, lastIndex = 0, pointsArray = []) {
    for(let i = 0, c = hull.length; i < c; i++) {
      const jointPoints = hull[i].jointPoints(hull[lastIndex]);
      if(i != lastIndex && jointPoints.length == 1 && !lineCount[i]) {
        lineCount[i] = 1;
        pointsArray.push(jointPoints[0]);
        Funnel.sortHull_t(hull, lineCount, i, pointsArray);
      }
    }
  }

  static sortHull(hull) {
    let lineCount = new Array(hull.length).fill(0);
    let pointsArray = [];
    lineCount[0] = 1;
    Funnel.sortHull_t(hull, lineCount, 0, pointsArray);
    if(pointsArray[0].arePointsEqual(hull[0].pointA)) {
      pointsArray.push(hull[0].pointB);
    }
    else {
      pointsArray.push(hull[0].pointA);
    }
    // Funnel.printFunnelPoints(pointsArray);
    let polygon = new Polygon();
    for(let i = 0, c = pointsArray.length; i < c; i++) {
      polygon.push(pointsArray[i].y, pointsArray[i].x)
    }
    polygon.pushIndex(0);
    return polygon;
  }

  static searchPath(triangles, midLines) {
    let hull = [];
    for(let i = 0, c = triangles.length; i < c; i++) {
      Funnel.getValidLinesFromTriangle(triangles[i], midLines, hull)
    }
    return Funnel.sortHull(hull);
  }

  static construct_t(triangles) {
    Funnel.printTrianglePoints(triangles);
    const startingPoints = triangles[0].disjointPoints(triangles[1]);
    if(startingPoints.length != 1) {
      return null;
    }
    const midLines = Funnel.midLines(triangles);
    return Funnel.searchPath(triangles, midLines);
  }

  static construct(triangles) {
    if(!triangles.length) {
      return null;
    }
    if(triangles.length == 1) {
      return new Polygon(
        triangles[0].a,
        triangles[0].b,
        triangles[0].c
      );
    }

    return Funnel.construct_t(triangles);
  }
}

export default Funnel;