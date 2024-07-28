"use client";
import { createEquipment } from "@/app/lib/action";
import { Paper, List, ListItem, Button } from "@mui/material";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function CreateEquipmentCard() {
    const startState = {
      message: " " 
    };
  
    const [state, dispatch] = useFormState(createEquipment, startState); 
      return (
        <form action={dispatch} >
          <Paper elevation={6} square={false} className="max-w-[55rem]">
            <div>
              <List className=" max-h-[17rem] border-2">
                <label htmlFor="Equipment Info" className="font-semibold">
                  Equipment Info:
                </label>
                    
                <div className="grid grid-cols-2">
                    <div className="">
                    <ListItem className="flex gap-1">
                      <label htmlFor="Equipment ID" className="font-medium">
                        Equipment ID:
                      </label>
                      <input
                        type="text"
                        name="EquipmentId"
                        placeholder=" Equipment ID"
                        className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                        required
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
                        name="brand"
                        placeholder="brand"
                        className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                        required
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
                        name="type"
                        placeholder="type"
                        className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                        required
                      />
                    </ListItem>
                  </div>
                </div>
              </List>
              <div className=" text-red-500 ">
                {state.message}
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