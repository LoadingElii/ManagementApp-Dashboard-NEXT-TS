"use client";

import { crewList } from "@/app/lib/placeholder-data";
import { CreateButton, EditButton } from "@/app/lib/button";
import { Crew } from "@/app/lib/definitions";

const headerLabels = [
  { name: "ID" },
  { name: "Crew Name" },
  { name: "Crew Memebers" },
  { name: "Equipment" },
];

export default function CrewTable({crews} : {crews : Crew[]}) {
  const rows = crews;
  return (
    <>
      <table className=" table-auto w-full h-3/5 mb-28 border-4 ">
        <thead>
          <tr>
            {headerLabels.map((header) => {
              return (
                <th
                  scope="col"
                  className="py-3 md:px-12 lg:px-24 text-2xl border-r-4 "
                >
                  {header.name}
                </th>
              );
            })}
            <th className=" py-3 px-2 text-2xl border-r-4 hover:text-blue-500 hover:bg-gray-400/75">
              <CreateButton />
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((crew) => {
            return (
              <>
                <tr
                  key={crew.id}
                  className="text-xl border-2 hover:text-blue-500 hover:shadow-lg hover:bg-gray-400/75"
                >
                  <td className="lg:px-10">{crew.name}</td>
                  <td className="lg:px-12">{crew.members?.length} </td>
                  <td className="lg:px-14">{crew.equipment?.length} </td>
                  <td className="lg:px-2">
                    <EditButton id={crew.id} />
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
