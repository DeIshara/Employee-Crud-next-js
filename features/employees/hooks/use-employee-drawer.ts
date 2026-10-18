import { useState } from "react";
import { Employee } from "../types";

export function useEmployeeDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState<Employee | null>(null);

  const openDrawerForEdit = (employee: Employee) => {
    setSelected(employee);
    setDrawerOpen(true);
  };

  const openDrawerForAdd = () => {
    setSelected(null);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelected(null);
  };

  return {
    drawerOpen,
    selected,
    openDrawerForEdit,
    openDrawerForAdd,
    closeDrawer,
  };
}