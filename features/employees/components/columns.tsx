import { ColumnDef } from '@tanstack/react-table';
import TaskActionButtons from './task-action-buttons';

// Define your employee type
interface Employee {
  empId: string;
  firstName: string;
  lastName: string;
  department: string;
}

// Use ColumnDef from the library
export const columns = (
  onEdit: (employee: Employee) => void, 
  onDelete: (employee: Employee) => void
): ColumnDef<Employee>[] => [
  { accessorKey: "empId", header: "Emp ID" },
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "department", header: "Department" },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <TaskActionButtons
        row={row.original}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ),
  },
];