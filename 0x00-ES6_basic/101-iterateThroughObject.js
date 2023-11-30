export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  let count = reportWithIterator.length;
  for (const a of reportWithIterator) {
    str += String(a);
    count -= 1;
    if (count !== 0) {
      str += ' | ';
    }
  }
  return str;
}
