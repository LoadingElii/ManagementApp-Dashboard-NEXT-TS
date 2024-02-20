"use client";
//import { fetchAttendance } from "@/app/lib/data";
import { BarChart } from "@mui/x-charts";
import { 
  weeklyAttendance, 
  monthlyAttendance, 
  todayActivity 
} from '@/app/lib/placeholder-data';
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";

export function TodayActivityChart() {
  return (
    <Paper 
      square={false} 
      elevation={6}
      className="flex justify-evenly h-14 w-96 lg:w-full text-xl font-medium"
    >
      <div className="flex flex-col items-center w-56 hover:opacity-50"> 
        <label>Crews</label> 
        <span className="self-center text-blue-300">{todayActivity.crew}</span>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div className="flex flex-col items-center w-56 hover:opacity-50"> 
        <label>Employees</label> 
        <span className="self-center text-blue-300">{todayActivity.employees}</span>
      </div>
       <Divider orientation="vertical" variant="middle" flexItem />  
      <div className="flex flex-col items-center w-56 hover:opacity-50"> 
        <label>Equipment</label> 
        <span className="self-center text-blue-300">{todayActivity.equipment}</span>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div className="flex flex-col items-center w-56 hover:opacity-50"> 
        <label>Timesheets</label> 
        <span className="self-center text-blue-300">{todayActivity.timesheets}</span>
      </div>

    </Paper>
  );
}

export function WeeklyAttendanceChart() {
    return (
        <Paper 
          square={false} 
          elevation={6}
          className="w-5/6"
        >
          <BarChart
            dataset={weeklyAttendance}
            series={[
                { dataKey: "attendance", label: "employees", type: "bar" },
            ]}
            xAxis={[{ scaleType: "band", dataKey: "day" }]}
            width={300}
            height={270}
           >
          </BarChart> 
        </Paper>
        
    );
}

export function MonthlyAttendanceChart() {
  return (
    <Paper 
      square={false} 
      elevation={6}
      className="w-5/6"
    >
      <BarChart
        dataset={monthlyAttendance}
        series={[
            { dataKey: "attendance", label: "employees", type: "bar" },
        ]}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        width={300}
        height={270}
       >
      </BarChart> 
    </Paper>
    
);
}

export function NotificationCenter() {
  return (
    <Paper 
      square={false} 
      elevation={6} 
      className="h-14 w-96 pl-14 pr-14 text-xl font-medium sm:w-full"
    >
     <div>
      <p>Hello Kray! You have <span className="text-blue-300">0</span> new notifications.</p>
     </div> 
    </Paper>
  );
}