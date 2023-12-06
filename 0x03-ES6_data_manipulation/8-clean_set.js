export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const touse = [...set].filter((fil) => (fil.startsWith(startString)));
  const fns = [];
  for (const ab of touse) {
    fns.push(ab.slice(startString.length));
  }
  return fns.join('-');
}
