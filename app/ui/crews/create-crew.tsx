"use client";
import { createCrew } from "@/app/lib/action";
import { Employee, Equipment } from "@/app/lib/definitions";
import {
  Paper,
  List,
  ListItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useFormState } from "react-dom";
import { number } from "zod";

export default function CreateCrewCard({
  employeeList,
  equipmentList,
}: {
  employeeList: Employee[];
  equipmentList: Equipment[];
}) {
  const startState = {
    message: " ",
  };

  const [state, dispatch] = useFormState(createCrew, startState);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>([]);

  const handleEmployeeChange = (event: ChangeEvent<HTMLSelectElement>) => {
     setEmployees(employees => [...employees, employeeList[parseInt(event.target.value)]]);
  };

  const handleEquipmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
     setEquipment(equipment => [...equipment, equipmentList[parseInt(event.target.value)]]);
  };

  // };
  // const handleEquipmentChange = (
  //   event: SelectChangeEvent<typeof equipmentType>
  // ) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setEquipmentType(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  //   const crewEquipment = equipmentList.find((equipment: Equipment) => {
  //     equipment.type == event.target.value;
  //   });

  return (
    <form action={dispatch}>
      <Paper elevation={6} square={false} className="max-w-[55rem]">
        <div>
          <List className=" max-h-[17rem] border-2">
            <label htmlFor="Crew Info" className="font-semibold">
              Crew Info:
            </label>

            <div className="grid grid-cols-2">
              <div className="">
                <ListItem className="flex gap-1">
                  <label htmlFor="Crew Name" className="font-medium">
                    Crew Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Crew Name"
                    className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                    required
                  />
                </ListItem>
              </div>

              <div className="">
                <ListItem className="flex gap-1">
                  <label htmlFor="Crew Members" className="font-medium">
                    Crew Members:
                  </label>
                  <div>
                    <select
                      id="member"
                      name="members"
                      className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      defaultValue="Crew Members"
                      onChange={handleEmployeeChange}
                      multiple={true}
                    >
                      <option value="" disabled>
                        Select Crew Members
                      </option>
                      {employeeList.map((employee, index) => (
                        <option key={index} value={employee.id}>
                          {employee.name}
                        </option>
                      ))}
                    </select>
                      {employees?.map((employee) => ( <input name="crewMembers" value={JSON.stringify(employee)}  />))}
                    {/* <Select
                          labelId="employee-list"
                          name="members"
                          multiple
                          onChange={handleEmployeeChange}
                          value={employeeName}
                        >
                          {employees.map((employee) => (
                            <MenuItem key={employee.id} value={employee.name}>
                              {employee.name}
                            </MenuItem>
                          ))}
                        </Select> */}
                  </div>
                </ListItem>
              </div>
              <div className="">
                <ListItem className="flex gap-1">
                  <label htmlFor="Crew Equipment " className="font-medium">
                    Crew Equipment:
                  </label>
                  <div>
                    <select
                      id="equipment"
                      name="equipment"
                      className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      defaultValue="Equipment"
                      onChange={handleEquipmentChange}
                      multiple={true}
                    >
                      <option value="" disabled>
                        Select equipment
                      </option>
                      {equipmentList.map((equipment, index) => (
                        <option key={index} value={equipment.id}>
                          {equipment.type}
                        </option>
                      ))}
                    </select>
                    {equipment?.map((equipment) => ( <input name="crewEquipment" value={JSON.stringify(equipment)} />))}



                  </div>
                </ListItem>
              </div>
            </div>
          </List>
          <div className=" text-red-500 ">{state.message}</div>
        </div>
        <div className="">
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
          <Link href={"/dashboard/crews"}>
            <Button variant="contained" color="error">
              Exit
            </Button>
          </Link>
        </div>
      </Paper>
    </form>
  );
}
