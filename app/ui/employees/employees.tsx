
import { CreateButton, EditButton } from "@/app/lib/button";
import { Employee } from "@/app/lib/definitions";

const headerLabels = [
    {name: "ID"},
    {name: "Name"},
    {name: "Email"},
    {name: "Role"},
]


export default function EmployeeTable({employees}: {employees: Employee[]}) {

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
                  <th className=" py-3 px-2 text-2xl border-r-4 hover:text-blue-500 hover:bg-gray-400/75">
                    <CreateButton />
                  </th>
                </tr>
                

            </thead>
            <tbody>
                {employees.map((employee) => {
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
                                <EditButton id={employee.id} />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
          </table>
        </>
    )
}