import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api/get-employee-details";
import { Employee } from "../types";

export function useEmployees() {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getEmployees();
      setData(res);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to load employees"));
    } finally {
      setLoading(false);
    }
  };

  const removeEmployee = async (empId: string) => {
    setLoading(true);
    try {
      await deleteEmployee(empId);
      await loadData(); // Refresh after deletion
      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to delete employee"));
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    data,
    loading,
    error,
    loadData,
    removeEmployee,
  };
}