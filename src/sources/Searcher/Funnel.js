import Point from "../Geometry/Point.js";
import Polygon from "../Geometry/Polygon.js";
import Triangle from "../Geometry/Triangle.js";

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

  static construct_t(triangles) {
    const startingPoints = triangles[0].disjointPoints(triangles[1]);
    if(startingPoints.length != 1) {
      return null;
    }
    const startingPoint = startingPoints[0];
    const midLines = Funnel.midLines(triangles);
    // to do tommorow.
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