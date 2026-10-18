"use client";

import EmployeeView from "./employee-view";
import DeleteConfirm from "./delete-confirm";
import { useEmployees } from "../hooks/use-employees";
import { useEmployeeDrawer } from "../hooks/use-employee-drawer";
import { useDeleteConfirmation } from "../hooks/use-delete-confirmation";
import EmployeeDataTableWrapper from "./employee-datatable-wrapper";

export default function EmployeeTableDetails() {
  const { data, loadData, removeEmployee } = useEmployees();
  const {
    drawerOpen,
    selected,
    openDrawerForEdit,
    openDrawerForAdd,
    closeDrawer,
  } = useEmployeeDrawer();
  
  const {
    deleteConfirmationDialogOpen,
    confirmDelete,
    handleConfirm,
    handleCancel,
  } = useDeleteConfirmation(async (employee) => {
    await removeEmployee(employee.empId);
  });

  return (
    <div>
      <button
        onClick={openDrawerForAdd}
        className="mb-4 bg-black text-white px-4 py-2"
      >
        Add Employee
      </button>

      <EmployeeDataTableWrapper 
        data={data}
        onEdit={openDrawerForEdit}
        onDelete={confirmDelete}
      />

      <EmployeeView
        open={drawerOpen}
        onClose={closeDrawer}
        initialData={selected}
        onSuccess={loadData}
      />

      <DeleteConfirm
        open={deleteConfirmationDialogOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
      />
    </div>
  );
}