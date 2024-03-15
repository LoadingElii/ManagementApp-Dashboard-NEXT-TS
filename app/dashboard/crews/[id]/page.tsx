import CrewCard from "@/app/ui/crews/crew-card";

export default function Page() {
    return(
        <div className="flex justify-around ">
          <p className="text-2xl pt-1 font-bold">Crew</p>  
          <div className="basis-4/5 pt-2	">
            <CrewCard />
          </div>
        </div>
    )
}