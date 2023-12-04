/* eslint-disabled */
export default function getStudentIdsSum(arr) {
  const lst = arr.map((arr) => (arr.id));
  const bg = 0;
  return lst.reduce((acc, bg) => (acc + bg));
}
