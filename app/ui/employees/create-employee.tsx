"use client";
import { createEmployee } from "@/app/lib/data";
import { Paper, List, ListItem, Button } from "@mui/material";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function CreateEmployeeCard() {
    const [message, dispatch] = useFormState(createEmployee, null); 
      return (
        <form action={dispatch} >
          <Paper elevation={6} square={false} className="max-w-[55rem]">
            <div>
              <List className=" max-h-[17rem] border-2">
                <label htmlFor="Employee Info" className="font-semibold">
                  Employee Info:
                </label>
                    
                <div className="grid grid-cols-2">
                    <div className="">
                    <ListItem className="flex gap-1">
                      <label htmlFor="Employee Name" className="font-medium">
                        Employee Name:
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
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
                        id="email"
                        placeholder="Email"
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
                        id="role"
                        placeholder="Role"
                        className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                        required
                      />
                    </ListItem>
                  </div>
                </div>
              </List>
              <div>
                {message?.message}
              </div>
            </div>
            <div className="">
              <Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Create
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