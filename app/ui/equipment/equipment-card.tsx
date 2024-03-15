"use client";
import { equipmentList } from "@/app/lib/placeholder-data";
import { Paper, List, ListItem, Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function EquipmentCard({id} : {id: number}) {
    const equipment = equipmentList[id];

  const [edit, setEdit] = useState(false);

  if (edit) {
    return (
      <form action="">
        <Paper elevation={6} square={false} className="max-w-[55rem]">
          <div>
            <List className=" max-h-[17rem] border-2">
              <label htmlFor="Equipment Info" className="font-semibold">
                Equipment Info:
              </label>

              <div className="grid grid-cols-2">
                <div>
                  <ListItem>
                    <label htmlFor="Equipment id" className="font-semibold">
                        Equipment ID:
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
                    <label htmlFor="Equipment Brand" className="font-medium">
                      Equipment Brand:
                    </label>
                    <input
                      type="text"
                      name="Brand"
                      placeholder={equipment.brand}
                      className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                    />
                  </ListItem>
                </div>

                <div className="">
                  <ListItem className="flex gap-1">
                    <label htmlFor="Equipment Type" className="font-medium">
                      Equipment Type:
                    </label>
                    <input
                      type="text"
                      name="Equipment Type"
                      placeholder={equipment.type}
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
            <label className="mb-0 font-semibold" htmlFor="Equipment Info">
              Equipment Info:
            </label>
            <div className="grid grid-cols-2">
              <ListItem className="flex gap-1">
                <label htmlFor="Equipment ID" className="font-medium">
                  Equipment ID:
                </label>
                {equipment.id}
              </ListItem>
              <ListItem className="flex gap-1">
                <label htmlFor="Equipment Brand" className="font-medium">
                  Equipment Brand:
                </label>
                {equipment.brand}
              </ListItem>
              <ListItem className="flex gap-1">
                <label htmlFor="Equipment Type" className="font-medium">
                  Equipment Type:
                </label>
                {equipment.type}
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
          <Link href={"/dashboard/equipment"}>
            <Button variant="contained" color="error">
              Exit
            </Button>
          </Link>
        </div>
      </Paper>
    </form>
  );
}

