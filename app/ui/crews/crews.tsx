"use client";

import { crewList } from '@/app/lib/placeholder-data';

const headerLabels = [
  {name: "ID"},
  {name: "Crew Name"},
  {name: "Crew Memebers"},
  {name: "Equipment"},
]

export default function CrewTable() {
    const rows = crewList;

    return (
      <>
      
       <table className=" table-auto w-full h-3/5 mb-28 border-4 ">
          <thead>
            <tr>
              {headerLabels.map((header) => {
                return(
                  <th scope="col"className="py-3 md:px-12 lg:px-24 text-2xl border-r-4 ">
                    {header.name}
                  </th>

                )
              })}
            </tr>
          </thead>
          <tbody>
              {rows.map((crews) => {
                  return(
                    <tr key={crews.id} className="text-xl border-2 hover:text-blue-500 hover:shadow-lg hover:bg-gray-400/75">
                    <td className="lg:px-14">
                              {crews.id}
                          </td>
                          <td className="lg:px-10">
                              {crews.crewName}
                          </td>
                          <td className="lg:px-12">
                              {crews.crewMembers}
                          </td>
                          <td className="lg:px-12">
                              {crews.equipment}
                          </td>
                      </tr>
                  )
              })}
          </tbody>
        </table>
      </>
  )
}

