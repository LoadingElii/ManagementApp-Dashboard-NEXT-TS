import EquipmentCard from "@/app/ui/equipment/equipment-card";

export default function Page ({params} : {params: {id: number}}) {
    return(
        <div className="flex justify-around ">
          <p className="text-2xl pt-1 font-bold">Equipment</p>  
          <div className="basis-4/5 pt-24 ">
            <EquipmentCard id={params.id} />
          </div>
        </div>
    )
}