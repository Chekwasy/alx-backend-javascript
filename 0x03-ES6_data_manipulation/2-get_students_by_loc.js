export default function getStudentsByLocation(arr, str) {
  return arr.filter((arr) => (arr.location === str));
}
