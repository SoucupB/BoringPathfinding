import Polygon from "../Geometry/Polygon.js";
import AStar from "./AStar.js";
import Funnel from "./Funnel.js";
import Line from "../Geometry/Line.js";
import Point from "../Geometry/Point.js";

class Search {
  constructor(polygon) {
    this.polygon = polygon;
    if(this.polygon) {
      this.navmesh = polygon.navmesh;
    }
    this.aStar = new AStar((triA) => triA.neighbours, (triA) => {
      return triA.id;
    }, (triA, triB) => triA.midDistance(triB));
  }

  search(src, dst) {
    return this.aStar.search(src, dst);
  }

  getNextPoint(currentPoint, currentIndex, triangles) {
    let index = currentIndex;
    for(let i = currentIndex, c = triangles.length; i < c; i++) {
      if(!this.polygon.doesSegmentIntersects(currentPoint, triangles[i].midPoint())) {
        index = i;
        continue;
      }
      break;
    }
    return index;
  }

  printBisector(bisector) {
    console.log(`(${bisector.pointA.y},${bisector.pointA.x}),(${bisector.pointB.y},${bisector.pointB.x})`)
  }

  // to test tommorow..
  searchFunnelPoints_t(funnel, bisectors, src, dst) {
    let searchAlgo = new AStar((bisector) => {
      let neigh = [];
      for(let i = 0, c = bisectors.length; i < c; i++) {
        if(!funnel.doesSegmentIntersects(bisector.pointB, bisectors[i].pointB)) {
          neigh.push(bisectors[i]);
        }
      }
      if(!funnel.doesSegmentIntersects(bisector.pointB, dst.pointB)) {
        neigh.push(dst);
      }
      return neigh;
    }, (bisector) => {
      return bisector.id;
    }, (bisectorA, bisectorB) => bisectorA.pointB.distancef(bisectorB.pointB));

    return searchAlgo.search(src, dst);
  }

  searchFunnelPoints(funnel, src, dst) {
    let bisectors = Funnel.constructBisectorsArray(funnel);
    return this.searchFunnelPoints_t(funnel, bisectors, new Line(new Point(-5, -5), new Point(src.y, src.x)), new Line(new Point(-5, -5), new Point(dst.y, dst.x)));
  }

  // to modify this
  getPointsPathFromTriangle(srcTriangle, dstTriangle, src, dst) {
    let triangles = this.search(srcTriangle, dstTriangle);
    let funnel = Funnel.construct(triangles);

    let pointsFoundInPath = this.searchFunnelPoints(funnel, src, dst);
    if(!pointsFoundInPath) {
      return null;
    }
    let pathPoints = [];
    for(let i = 0, c = pointsFoundInPath.length; i < c; i++) {
      pathPoints.push(pointsFoundInPath[i].pointB);
    }
    return pathPoints;
  }

  getPointsPath(src, dst) {
    const triangleSrc = this.polygon.getTriangle(src);
    if(!triangleSrc) {
      return null;
    }
    const triangleDst = this.polygon.getTriangle(dst);
    if(!triangleDst) {
      return null;
    }

    return [src, ...this.getPointsPathFromTriangle(triangleSrc, triangleDst, src, dst), dst]
  }
}

export default Search;