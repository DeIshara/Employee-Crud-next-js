import { NextResponse } from "next/server";

type Employee = {
  empId: string;
  firstName: string;
  lastName: string;
  department: string;
};

// ✅ Dummy DB (in-memory)
let employees: Employee[] = [
  { empId: "E001", firstName: "John", lastName: "Doe", department: "HR" },
  { empId: "E002", firstName: "Jane", lastName: "Smith", department: "Finance" },
  { empId: "E003", firstName: "Michael", lastName: "Johnson", department: "IT" },
  { empId: "E004", firstName: "Emily", lastName: "Davis", department: "Marketing" },
  { empId: "E005", firstName: "Daniel", lastName: "Brown", department: "Sales" },
];

// ✅ GET all employees
export async function GET() {
  return NextResponse.json(employees);
}

// ✅ CREATE employee
export async function POST(req: Request) {
  const body: Employee = await req.json();
  employees.push(body);

  return NextResponse.json({ message: "Employee added", data: body });
}

// ✅ UPDATE employee
export async function PUT(req: Request) {
  const body: Employee = await req.json();

  employees = employees.map((emp) =>
    emp.empId === body.empId ? body : emp
  );

  return NextResponse.json({ message: "Employee updated", data: body });
}

// ✅ DELETE employee
export async function DELETE(req: Request) {
  const { empId } = await req.json();

  employees = employees.filter((emp) => emp.empId !== empId);

  return NextResponse.json({ message: "Employee deleted", empId });
}