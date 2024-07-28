import getAllEmployees, {  getAllEquipment } from "@/app/lib/data";
import CreateCrewCard from "@/app/ui/crews/create-crew";

export default async function Page() {
  const [employees, equipmentList] = await Promise.all([
    getAllEmployees(),
    getAllEquipment(),
  ]);
  return (
    <div className="flex flex-col gap-4 justify-center">
      <p className="text-2xl py-2 ml-4 font-bold">Create Employee</p>
      <div className="self-center">
        <CreateCrewCard employeeList={employees} equipmentList={equipmentList} />
      </div>
    </div>
  );
}

