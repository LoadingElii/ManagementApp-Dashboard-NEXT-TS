import { getEmployee } from "@/app/lib/data";
import EmployeeCard from "@/app/ui/employees/employee-card";

export default async function Page ({params} : {params: {id: number}}) {
  const employee = await getEmployee(params.id);
    return(
        <div className="flex justify-around ">
          <p className="text-2xl pt-1 font-bold">Employee</p>  
          <div className="basis-4/5 pt-24	">
            <EmployeeCard employee={employee} />
          </div>
        </div>
    )
}