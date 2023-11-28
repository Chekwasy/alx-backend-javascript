export default function returnHowManyArguments(...args) {
  let len = 0;
  for (const le of args) {
    if (le) {
      len += 1;
    }
  }
  return len;
}
