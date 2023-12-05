export default function hasValuesFromArray(set, array) {
  for (const ech of array) {
    if (set.has(ech) === false) {
      return false;
    }
  }
  return true;
}
