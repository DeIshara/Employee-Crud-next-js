import { useState } from "react";
import { Employee } from "../types";

export function useDeleteConfirmation(onConfirmDelete: (employee: Employee) => Promise<void>) {
  const [deleteConfirmationDialogOpen, setDeleteOpen] = useState(false);
  const [selectedForDelete, setSelectedForDelete] = useState<Employee | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const confirmDelete = (employee: Employee) => {
    setSelectedForDelete(employee);
    setDeleteOpen(true);
  };

  const handleConfirm = async () => {
    if (selectedForDelete) {
      setIsDeleting(true);
      try {
        await onConfirmDelete(selectedForDelete);
        setDeleteOpen(false);
        setSelectedForDelete(null);
      } finally {
        setIsDeleting(false);
      }
    }
  };

  const handleCancel = () => {
    setDeleteOpen(false);
    setSelectedForDelete(null);
  };

  return {
    deleteConfirmationDialogOpen,
    isDeleting,
    selectedForDelete,
    confirmDelete,
    handleConfirm,
    handleCancel,
  };
}