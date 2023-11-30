export default function createReportObject(employeesList) {
  const allEmployees = {};
  for (const [departmentName, Employees] of Object.entries(employeesList)) {
    allEmployees[departmentName] = [...Employees];
  }
  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
