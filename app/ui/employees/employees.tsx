"use client";

import { SendEmployeeId } from "@/app/lib/button";
import { employeeList } from "@/app/lib/placeholder-data";

const headerLabels = [
    {name: "ID"},
    {name: "Name"},
    {name: "Email"},
    {name: "Role"},
]


export default function EmployeeTable() {
    const rows = employeeList;  
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
                {rows.map((employee) => {
                    return(
                        <tr key={employee.id} className="text-xl border-2 hover:text-blue-500 hover:shadow-lg hover:bg-gray-400/75">
                            <td className="lg:px-14">
                                {employee.id}
                            </td>
                            <td className="lg:px-10">
                                {employee.name}
                            </td>
                            <td className="lg:px-12">
                                {employee.email}
                            </td>
                            <td className="lg:px-12">
                                {employee.role}
                            </td>
                            <td className="lg: px-2">
                                <SendEmployeeId id={employee.id} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </>
    )
}