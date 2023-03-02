// https://en.wikipedia.org/wiki/Metric_space#Simple_examples

export type TwoPointsType = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

// https://en.wikipedia.org/wiki/Euclidean_distance
export const getDistanceEuclidean = ({ x1, x2, y1, y2 }: TwoPointsType) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
// https://en.wikipedia.org/wiki/Taxicab_geometry
export const getDistanceManhattan = ({ x1, x2, y1, y2 }: TwoPointsType) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};
// https://en.wikipedia.org/wiki/Chebyshev_distance
export const getDistanceChebyshev = ({ x1, x2, y1, y2 }: TwoPointsType) => {
  return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
};
