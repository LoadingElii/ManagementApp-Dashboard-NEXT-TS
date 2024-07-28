"use client";
import { deleteCrew, updateCrew } from "@/app/lib/action";
import { Crew } from "@/app/lib/definitions";
import { Button, List, ListItem, Paper } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";

export default function CrewCard({crew} : {crew : Crew}) {
  const [edit, setEdit] = useState(false);
  const initialState = {
    message: " ",
  };
  const [state, dispatch] = useFormState(updateCrew, initialState)

  if (edit) {
    return (
      <form action={dispatch}>
        <Paper
          elevation={6}
          square={false}
          className="max-w-[55rem]"
       
        >
          <div className="flex gap-2">
            <div>
              <label 
                htmlFor="Crew id"
                className="font-semibold"
              > 
                Crew ID: 
              </label>
              <input
                type="text"
                name="id"
                placeholder="Crew ID"
                value={crew.id}
                className="bg-gray-50 max-w-[8rem] md:max-w-[10rem]"
              />
            </div>
            <div>
              <label 
                htmlFor="Crew name"
                className="font-semibold"
              > 
                Crew Name: 
              </label>
              <input
                type="text"
                name="name"
                placeholder="Crew Name"
                defaultValue={crew.name}
                className="bg-gray-50  max-w-[8rem] md:max-w-[10rem] "
                required              
              />
            </div>
          </div>

          <div>
            <List className=" max-h-[17rem] border-2">
              <label htmlFor="Crew Info" className="font-semibold">Crew Info:</label>

              {crew.members?.map((member) => {
                return (
                  <div className="grid grid-cols-2">
                    <div className="">
                      <ListItem className="flex gap-1">
                        <label 
                          htmlFor="Member Name"
                          className="font-medium"
                        >
                            Name:
                        </label>
                        <input
                          type="text"
                          name="members"
                          placeholder="Member Name"
                          defaultValue={member.name}
                          className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                          required
                        />
                      </ListItem>
                    </div>

                    <div className="">
                      <ListItem className="flex gap-1">
                        <label 
                          htmlFor="Member Role"
                          className="font-medium"
                        >
                          Role:
                        </label>
                        <input
                          type="text"
                          name="Memeber Role"
                          placeholder="Member Role"
                          defaultValue={member.role}
                          className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                          required
                        />
                      </ListItem>
                    </div>
                  </div>
                );
              })}
            </List>
          </div>
          <div>
            <List className="border-2">
              <label htmlFor="Equipment Info" className="font-semibold">Equipment Info:</label>

              {crew.equipment?.map((equipment) => {
                return (
                  <div className="grid grid-cols-2">
                    <div className="">
                      <ListItem className="flex gap-1">
                        <label
                          htmlFor="Equipment Brand"
                          className="font-medium"
                        >
                          Brand:
                        </label>
                        <input
                          type="text"
                          name="Brand"
                          placeholder="Equipment Brand"
                          defaultValue={equipment.brand}
                          className=" max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
                        />
                      </ListItem>
                    </div>

                    <div className="">
                      <ListItem className="flex gap-1">
                        <label 
                          htmlFor="Equipment Type"
                          className="font-medium"
                        >Type:</label>
                        <input
                          type="text"
                          name="Equipment"
                          placeholder="Equipment Type"
                          defaultValue={equipment.type}
                          className="max-w-[8rem] md:max-w-[10rem] bg-gray-50"
                          required
                        />
                      </ListItem>
                    </div>
                  </div>
                );
              })}
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
    <form action="">
      <Paper
        elevation={6}
        square={false}
        className="max-w-[55rem]"
      >
        <div className="flex gap-2 ">
          <label htmlFor="Crew id">
            <span className="font-semibold">
              Crew ID:
            </span>
            {crew.id}
          </label>
          <label htmlFor="Crew name"><span className="font-semibold">Crew Name:</span> {crew.name}</label>
        </div>
        <div>
          <List className="max-h-[17rem] border-2">
            <label 
              className="mb-0 font-semibold" 
              htmlFor="Crew Info"
            >
              Crew Info:
            </label>
            {crew.members?.map((member) => {
              return (
                <div className="grid grid-cols-2">
                  <ListItem className="flex gap-1">
                    <label 
                      htmlFor="member"
                      className="font-medium">
                      Name:
                    </label>
                    {member.name}
                  </ListItem>
                  <ListItem className="flex gap-1">
                    <label 
                      htmlFor="member"
                      className="font-medium">
                      Role:
                    </label>
                    {member.role}
                  </ListItem>
                </div>
              );
            })}
          </List>
        </div>
        <div>
          <List className=" border-2">
            <label 
              htmlFor="Equipment Info" 
              className="font-semibold"
            >
              Equipment Info:
            </label>

            {crew.equipment?.map((equipment) => {
              return (
                <div className="grid grid-cols-2">
                  <ListItem className="flex gap-1">
                    <label 
                      htmlFor="equipment"
                      className="font-medium">
                      Brand:
                    </label>
                    {equipment.brand}
                  </ListItem>
                  <ListItem className="flex gap-1">
                    <label 
                      htmlFor="equipment"
                      className="font-medium">
                      Type:
                    </label>
                    {equipment.type}
                  </ListItem>
                </div>
              );
            })}
          </List>
        </div>
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
          onClick={() => deleteCrew(crew.id)}
        >
            Delete
        </Button>
        <Link href={"/dashboard/crews"}>
          <Button variant="contained" color="error">
            Exit
          </Button>
        </Link>
      </Paper>
    </form>
  );
}
