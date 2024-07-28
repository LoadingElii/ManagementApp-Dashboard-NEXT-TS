import { getCrew } from "@/app/lib/data";
import CrewCard from "@/app/ui/crews/crew-card";

export default async function Page({params} : {params : {id : number }}) {
  const crew = await getCrew(params.id);
    return(
        <div className="flex justify-around ">
          <p className="text-2xl pt-1 font-bold">Crew</p>  
          <div className="basis-4/5 pt-2	">
            <CrewCard crew={crew} />
          </div>
        </div>
    )
}