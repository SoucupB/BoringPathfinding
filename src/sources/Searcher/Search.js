import Polygon from "../Geometry/Polygon.js";
import AStar from "./AStar.js";
import Funnel from "./Funnel.js";

class Search {
  constructor(polygon) {
    this.polygon = polygon;
    this.navmesh = polygon.navmesh;
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

  searchFunnelPoints(funnel, src, dst) {
    
  }

  // to modify this
  getPointsPathFromTriangle(srcTriangle, dstTriangle, src, dst) {
    let triangles = this.search(srcTriangle, dstTriangle);
    let funnel = Funnel.construct(triangles);
    Polygon.print(funnel);
    if(triangles.length <= 1) {
      return [srcTriangle];
    }
    let pathPoints = [srcTriangle.midPoint()];
    for(let i = 0; i < triangles.length; i++) {
      pathPoints.push(triangles[i].midPoint());
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