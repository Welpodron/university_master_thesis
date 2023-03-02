import * as appRoot from "app-root-path";
import { getProblem } from "./reader";
import { clarkeWrightSavingsAlgorithm } from "./clarke";
import {
  checkCapacity,
  checkDepotsPlacement,
  checkAllLocationsVisitedOnce,
} from "./constrains";

const main = async () => {
  const problem = await getProblem({
    path: `${appRoot}/benchmarks/A/A-n32-k5.vrp`,
  });
  const solution = clarkeWrightSavingsAlgorithm({
    nodes: problem.dimension,
    demands: problem.demands,
    capacity: problem.capacity,
    distancesMatrix: problem.distancesMatrix,
  });
  const isDepotsPlacementOk = checkDepotsPlacement({
    routes: solution,
  });
  const isCapacityOk = checkCapacity({
    routes: solution,
    capacity: problem.capacity,
    demands: problem.demands,
  });
  const isAllLocationsVisitedOnce = checkAllLocationsVisitedOnce({
    routes: solution,
    locations: new Array(problem.dimension - 1).fill(0).map((_, i) => i + 1),
  });
  console.log(isAllLocationsVisitedOnce);
};

main();
