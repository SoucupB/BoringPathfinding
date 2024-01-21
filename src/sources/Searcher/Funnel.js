import Point from "../Geometry/Point.js";
import Polygon from "../Geometry/Polygon.js";
import Triangle from "../Geometry/Triangle.js";

class Funnel {
  constructor() {
  }

  static construct_t(triangles) {
    let funnel = new Polygon();

    const startingPoints = triangles[0].disjointPoints(triangles[1]);
    if(startingPoints.length != 1) {
      return null;
    }
    const startingPoint = startingPoints[0];

    

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