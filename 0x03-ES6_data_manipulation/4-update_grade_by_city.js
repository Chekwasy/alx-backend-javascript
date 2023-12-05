/* eslint-disabled */
export default function updateStudentGradeByCity(arr, st, argrade) {
  return arr.filter((arr) => (arr.location === st)).map((id) => {
    const fn = argrade.find((grr) => (grr.studentId === id.id));
    return { ...id, grade: fn ? fn.grade : 'N/A' };
  });
}
