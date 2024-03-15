"use client";
import { Crew } from "@/app/lib/definitions";
import { crewExample } from "@/app/lib/placeholder-data";
import { Button, List, ListItem, Paper } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function CrewCard() {
  const [edit, setEdit] = useState(false);

  if (edit) {
    return (
      <form action="">
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
                id="id"
                placeholder="Crew ID"
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
                id="name"
                placeholder="Crew Name"
                className="bg-gray-50  max-w-[8rem] md:max-w-[10rem] "
              />
            </div>
          </div>

          <div>
            <List className=" max-h-[17rem] border-2">
              <label htmlFor="Crew Info" className="font-semibold">Crew Info:</label>

              {crewExample.members.map((member) => {
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
                          className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
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
                          className="max-w-[8rem] md:max-w-[10rem] bg-gray-50 "
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

              {crewExample.equipment.map((equipment) => {
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
                          name="Equipment Brand"
                          placeholder="Equipment Brand"
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
                          name="Equipment Type"
                          placeholder="Equipment Type"
                          className="max-w-[8rem] md:max-w-[10rem] bg-gray-50"
                        />
                      </ListItem>
                    </div>
                  </div>
                );
              })}
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
            {crewExample.id}
          </label>
          <label htmlFor="Crew name"><span className="font-semibold">Crew Name:</span> {crewExample.name}</label>
        </div>
        <div>
          <List className="max-h-[17rem] border-2">
            <label 
              className="mb-0 font-semibold" 
              htmlFor="Crew Info"
            >
              Crew Info:
            </label>
            {crewExample.members.map((member) => {
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

            {crewExample.equipment.map((equipment) => {
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
        <Link href={"/dashboard/crews"}>
          <Button variant="contained" color="error">
            Exit
          </Button>
        </Link>
      </Paper>
    </form>
  );
}
