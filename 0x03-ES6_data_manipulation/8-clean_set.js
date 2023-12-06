export default function cleanSet(set, startString) {
  if (startString.length === 0 || startString === undefined) {
    return '';
  }
  const touse = [...set].filter((fil) => (fil.startsWith(startString)));
  if (touse.length !== 0) {
    const fns = [];
    for (const ab of touse) {
      fns.push(ab.slice(startString.length));
    }
    return fns.join('-');
  }
  return '';
}
