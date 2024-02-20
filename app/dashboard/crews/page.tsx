import CrewTable from "@/app/ui/crews/crews";

export default function Page() {
    return (
        <div className="flex flex-col gap-4 w-full h-full">
          <p className="text-2xl font-semibold">Crews</p>
          <div className=" ">
            <CrewTable />
          </div>
        </div>
    );
}