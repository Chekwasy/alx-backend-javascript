export default function cleanSet(set, startString) {
//  if (startString.length === 0 || startString === undefined) {
  //  return '';
  // }
  // const touse = [...set].filter((fil) => (fil.startsWith(startString)))
//    .map((lst) => (lst.slice(startString.length))).join('-');
  // if (touse.length > 0) {
  // return touse;
  // }
  // return '';
// }
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((parametro) => (parametro !== undefined ? parametro.startsWith(startString) : ''))
    .map((parametro) => (parametro !== undefined ? parametro.slice(startString.length) : ''))
    .join('-');
}
