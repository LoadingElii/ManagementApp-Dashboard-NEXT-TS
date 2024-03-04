import EquipmentTable from "@/app/ui/equipment/equipment-table";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 justify-center w-full h-screen">
            <p className="text-2xl py-2 ml-4 font-bold">Equipment</p>
            <EquipmentTable />
        </div>
    );
}