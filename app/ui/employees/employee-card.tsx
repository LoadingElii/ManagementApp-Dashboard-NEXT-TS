"use client";
import { Button, List, ListItem, Paper } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import { deleteEmployee, updateEmployee } from "@/app/lib/action";
import { Employee } from "@/app/lib/definitions";

export default function EmployeeCard({ employee }: { employee: Employee }) {
  const initalState = {
    message: " ",
  };

  const [edit, setEdit] = useState(false);
  const [state, dispatch] = useFormState(updateEmployee, initalState);

  if (edit) {
    return (
      <form action={dispatch}>
        <Paper elevation={6} square={false} className="max-w-[55rem]">
          <div>
            <List className=" max-h-[17rem] border-2">
              <div className="grid grid-cols-2">
                <label htmlFor="Employee Info" className="font-semibold">
                  Employee Info:
                </label>
                <div>
                  <ListItem>
                    <label htmlFor="Employee id" className="font-semibold">
                      Employee ID:
                    </label>
                    <input type="text" name="id" value={employee.id} />
                  </ListItem>
                </div>

                <div className="">
                  <ListItem className="flex gap-1">
                    <label htmlFor="Employee Name" className="font-medium">
                      Employee Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="employee name"
                      defaultValue={employee.name}
                      className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                      required
                    />
                  </ListItem>
                </div>

                <div className="">
                  <ListItem className="flex gap-1">
                    <label htmlFor="Employee Email" className="font-medium">
                      Employee Email:
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="employee email"
                      defaultValue={employee.email}
                      className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                      required
                    />
                  </ListItem>
                </div>
                <div className="">
                  <ListItem className="flex gap-1">
                    <label htmlFor="Employee Role" className="font-medium">
                      Employee Role:
                    </label>
                    <input
                      type="text"
                      name="role"
                      placeholder="employee role"
                      defaultValue={employee.role}
                      className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                      required
                    />
                  </ListItem>
                </div>
              </div>
            </List>
            <div className="text-base text-red-600">{state?.message}</div>
          </div>
          <div className="">
            <Button 
              type="submit"
              variant="contained" 
              color="success" 
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setEdit(!edit)}
            >
              Cancel
            </Button>
          </div>
        </Paper>
      </form>
    );
  }

  return (
    <Paper elevation={6} square={false} className="max-w-[55rem]">
      <div>
        <List className="max-h-[17rem] border-2">
          <label className="mb-0 font-semibold" htmlFor="Employee Info">
            Employee Info:
          </label>
          <div className="grid grid-cols-2">
            <ListItem className="flex gap-1">
              <label htmlFor="Employee ID" className="font-medium">
                Employee ID:
              </label>
              {employee.id}
            </ListItem>
            <ListItem className="flex gap-1">
              <label htmlFor="Employee Name" className="font-medium">
                Employee Name:
              </label>
              {employee.name}
            </ListItem>
            <ListItem className="flex gap-1">
              <label htmlFor="Employee Email" className="font-medium">
                Employee Email:
              </label>
              {employee.email}
            </ListItem>
            <ListItem className="flex gap-1">
              <label htmlFor="Employee Role" className="font-medium">
                Employee Role:
              </label>
              {employee.role}
            </ListItem>
          </div>
        </List>
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setEdit(!edit)}
        >
          Edit
        </Button>
        <Button 
          variant="contained"
          color="secondary"
          onClick={() => deleteEmployee(employee.id)}
        >
            Delete
        </Button>
        <Link href={"/dashboard/employees"}>
          <Button variant="contained" color="error">
            Exit
          </Button>
        </Link>
      </div>
    </Paper>
  );
}
