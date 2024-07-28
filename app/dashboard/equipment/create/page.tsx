import CreateEquipmentCard from "@/app/ui/equipment/create-equipment";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 justify-center">
            <p className="text-2xl py-2 ml-4 font-bold">Create Employee</p>
            <div className="self-center">
              <CreateEquipmentCard />
            </div>
        </div>
    );
}