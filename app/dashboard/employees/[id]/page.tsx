import EmployeeCard from "@/app/ui/employees/employee-card";
import EmployeeTable from "@/app/ui/employees/employees";

export default function Page ({params} : {params: {id: number}}) {
    return(
        <div className="flex justify-around ">
          <p className="text-2xl pt-1 font-bold">Employee</p>  
          <div className="basis-4/5 pt-24	">
            <EmployeeCard id={params.id} />
          </div>
        </div>
    )
}