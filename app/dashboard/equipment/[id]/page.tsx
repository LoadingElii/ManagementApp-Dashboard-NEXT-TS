import { getEquipment } from "@/app/lib/data";
import EquipmentCard from "@/app/ui/equipment/equipment-card";

export default async function Page ({params} : {params: {id: number}}) {
  const equipment = await getEquipment(params.id);
    return(
        <div className="flex justify-around ">
          <p className="text-2xl pt-1 font-bold">Equipment</p>  
          <div className="basis-4/5 pt-24 ">
            <EquipmentCard equipment={equipment} />
          </div>
        </div>
    )
}