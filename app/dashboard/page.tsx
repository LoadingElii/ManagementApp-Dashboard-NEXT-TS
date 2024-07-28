import { MonthlyAttendanceChart, 
  NotificationCenter,
   TodayActivityChart, 
   WeeklyAttendanceChart
   } from "../ui/dashboard/charts";

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-2 w-full h-full justify-items-center ">

      <div className=" mt-2 col-span-2">
        <p className="text-2xl font-semibold">Today Activity</p>
        <div>
          <TodayActivityChart />
        </div>
      </div>

      <div className=" ml-20 lg:max-w-md">
        <p className="text-2xl font-semibold">Weekly Attendance</p>
        <div className="lg:min-w-96">
          <WeeklyAttendanceChart />
        </div>
      </div>

      <div className="lg:min-w-96">
        <p className="text-2xl font-semibold">Monthly Attendance</p>
        <div className="lg:min-w-lg">
          <MonthlyAttendanceChart />
        </div>
      </div>


      <div className="mb-36 col-span-2">
        <p className="text-2xl font-semibold">Notification Center</p>
        <div>
          <NotificationCenter />
        </div>
      </div>

    </div>
  );
}