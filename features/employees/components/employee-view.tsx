"use client";

import { useState } from "react";
import { createEmployee, updateEmployee } from "../api/get-employee-details";
import { Employee } from "../types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";

interface EmployeeFormProps {
  initialData?: Employee | null;
  onSuccess: (data: Employee) => void;
  onCancel: () => void;
}

function EmployeeForm({ initialData, onSuccess, onCancel }: EmployeeFormProps) {
  const [form, setForm] = useState<Employee>(
    initialData || {
      empId: "",
      firstName: "",
      lastName: "",
      department: "",
    }
  );

  const handleSubmit = async () => {
    if (initialData) {
      await updateEmployee(form);
    } else {
      await createEmployee(form);
    }
    onSuccess(form);
  };

  return (
    <>
      <DrawerHeader>
        <DrawerTitle>
          {initialData ? "Edit Employee" : "Add Employee"}
        </DrawerTitle>
      </DrawerHeader>

      <div className="space-y-4 py-4 px-4">
        <div className="space-y-2">
          <Label htmlFor="empId">Employee ID</Label>
          <Input
            id="empId"
            placeholder="Enter employee ID"
            value={form.empId}
            disabled={!!initialData}
            onChange={(e) => setForm({ ...form, empId: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="Enter first name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Enter last name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Input
            id="department"
            placeholder="Enter department"
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
          />
        </div>
      </div>

      <DrawerFooter className="pt-2">
        <Button onClick={handleSubmit}>Save</Button>
        <DrawerClose asChild>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </>
  );
}

interface Props {
  open: boolean;
  onClose: () => void;
  initialData?: Employee | null;
  onSuccess: () => void;
}

export default function EmployeeView({
  open,
  onClose,
  initialData,
  onSuccess,
}: Props) {
  const handleSuccess = () => {
    onSuccess();
    onClose();
  };

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="sm:max-w-[425px] mx-auto">
        <EmployeeForm
          key={open ? initialData?.empId || "new" : "closed"}
          initialData={initialData}
          onSuccess={handleSuccess}
          onCancel={onClose}
        />
      </DrawerContent>
    </Drawer>
  );
}