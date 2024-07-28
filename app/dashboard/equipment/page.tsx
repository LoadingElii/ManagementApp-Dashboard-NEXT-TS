import { getAllEquipment } from "@/app/lib/data";
import EquipmentTable from "@/app/ui/equipment/equipment";

export default async function Page() {
  const equipmentList = await getAllEquipment();
    return (
        <div className="flex flex-col gap-4 justify-center w-full h-screen">
            <p className="text-2xl py-2 ml-4 font-bold">Equipment</p>
            <EquipmentTable equipment={equipmentList} />
        </div>
    );
}