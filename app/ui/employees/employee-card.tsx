"use client";
import { Button, List, ListItem, Paper } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { employeeList } from "@/app/lib/placeholder-data";

export default function EmployeeCard({ id }: { id: number }) {
  const employee = employeeList[id];

  const [edit, setEdit] = useState(false);

  if (edit) {
    return (
      <form action="">
        <Paper elevation={6} square={false} className="max-w-[55rem]">
          <div>
            <List className=" max-h-[17rem] border-2">
              <label htmlFor="Employee Info" className="font-semibold">
                Employee Info:
              </label>

              <div className="grid grid-cols-2">
                <div>
                  <ListItem>
                    <label htmlFor="Employee id" className="font-semibold">
                      Employee ID:
                    </label>
                    <input
                      type="text"
                      name="id"
                      id="id"
                      placeholder="ID"
                      className="bg-gray-50 max-w-[8rem] md:max-w-[10rem]"
                    />
                  </ListItem>
                </div>

                <div className="">
                  <ListItem className="flex gap-1">
                    <label htmlFor="Employee Name" className="font-medium">
                      Employee Name:
                    </label>
                    <input
                      type="text"
                      name="Name"
                      placeholder={employee.name}
                      className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
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
                      name="Employee Email"
                      placeholder={employee.email}
                      className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
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
                      name="Employee Role"
                      placeholder={employee.role}
                      className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                    />
                  </ListItem>
                </div>
              </div>
            </List>
          </div>
          <div className="">
            <Button
              onClick={() => setEdit(!edit)}
              variant="contained"
              color="primary"
            >
              Edit
            </Button>
            <Link href={"/dashboard/employees"}>
              <Button variant="contained" color="error">
                Exit
              </Button>
            </Link>
          </div>
        </Paper>
      </form>
    );
  }

  return (
    <form action="">
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
          <Link href={"/dashboard/employees"}>
            <Button variant="contained" color="error">
              Exit
            </Button>
          </Link>
        </div>
      </Paper>
    </form>
  );
}
