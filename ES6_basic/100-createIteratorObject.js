export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      const departments = Object.values(report.allEmployees);

      for (const employees of departments) {
        for (const employee of employees) {
          yield employee;
        }
      }
    },
  };
}
