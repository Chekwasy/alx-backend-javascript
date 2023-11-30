export default function createIteratorObject(report) {
  const lst = [];
  const lst2 = [];
  for (const [departmentName, Employees] of Object.entries(report.allEmployees)) {
    lst2.push(departmentName);
    for (const a of Employees) {
      lst.push(a);
    }
  }
  return lst;
}
