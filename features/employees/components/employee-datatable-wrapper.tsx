"use client";

import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";
import { Employee } from "../types";

interface EmployeeDataTableWrapperProps {
  data: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (employee: Employee) => void;
}

export default function EmployeeDataTableWrapper({ 
  data, 
  onEdit, 
  onDelete 
}: EmployeeDataTableWrapperProps) {
  return (
    <DataTable
      columns={columns(onEdit, onDelete)}
      data={data}
    />
  );
}