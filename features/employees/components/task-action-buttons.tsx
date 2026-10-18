"use client";

import { Employee } from "../types";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  row: Employee;
  onEdit: (emp: Employee) => void;
  onDelete: (emp: Employee) => void;
}

export default function TaskActionButtons({
  row,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onEdit(row)}
        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
      >
        <Pencil className="h-4 w-4 mr-1" />
        Edit
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(row)}
        className="text-red-600 hover:text-red-700 hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4 mr-1" />
        Delete
      </Button>
    </div>
  );
}