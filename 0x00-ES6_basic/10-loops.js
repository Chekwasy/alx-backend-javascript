/* eslint-disable import/extensions */
export default function appendToEachArrayValue(array, appendString) {
  let value = '';
  const nwarr = [];
  for (const idx of array) {
    value = array[idx];
    nwarr.push(appendString + value);
  }
  return nwarr;
}
