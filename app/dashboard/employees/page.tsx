import EmployeeTable from "@/app/ui/employees/employees";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 justify-center">
            <p className="text-2xl py-2 ml-4 font-bold">Employees</p>
            <EmployeeTable />
        </div>
    );
}