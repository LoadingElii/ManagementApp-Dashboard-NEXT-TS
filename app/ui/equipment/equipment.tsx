"use client";

import { SendEquipmentId } from "@/app/lib/button";
import { equipmentList } from "@/app/lib/placeholder-data";

const headerLabels = [
    {name: "ID"},
    {name: "Brand"},
    {name: "Type"},
]

export default function EquipmentTable() {
    const rows = equipmentList;
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
                {rows.map((equipment) => {
                    return(
                        <tr key={equipment.id} className="text-xl border-2 hover:text-blue-500 hover:shadow-lg hover:bg-gray-400/75">
                            <td className="lg:px-14">
                                {equipment.id}
                            </td>
                            <td className="lg:px-10">
                                {equipment.brand}
                            </td>
                            <td className="lg:px-12">
                                {equipment.type}
                            </td>
                            <td className="lg:px-2">
                                <SendEquipmentId id={ equipment.id } />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </>
    )
}