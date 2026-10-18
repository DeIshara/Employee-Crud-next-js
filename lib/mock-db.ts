import { Employee } from "@/features/employees/types";

export let employees: Employee[] = [
  { empId: "E001", firstName: "John", lastName: "Doe", department: "HR" },
  { empId: "E002", firstName: "Jane", lastName: "Smith", department: "Finance" },
  { empId: "E003", firstName: "Michael", lastName: "Johnson", department: "IT" },
];

export const db = {
  getAll: () => employees,

  getById: (id: string) =>
    employees.find((e) => e.empId === id),

  create: (emp: Employee) => {
    employees.push(emp);
    return emp;
  },

  update: (id: string, updated: Partial<Employee>) => {
    employees = employees.map((e) =>
      e.empId === id ? { ...e, ...updated } : e
    );
    return employees.find((e) => e.empId === id);
  },

  remove: (id: string) => {
    employees = employees.filter((e) => e.empId !== id);
  },
};