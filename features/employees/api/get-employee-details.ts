import { Employee } from "../types";

export async function getEmployees(): Promise<Employee[]> {
  const res = await fetch("https://localhost:7136/api/Employees");
  return res.json();
}

export async function createEmployee(data: Employee) {
  await fetch("https://localhost:7136/api/Employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function updateEmployee(data: Employee) {
  await fetch("https://localhost:7136/api/Employees", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteEmployee(empId: string) {
  await fetch("https://localhost:7136/api/Employees", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ empId }),
  });
}