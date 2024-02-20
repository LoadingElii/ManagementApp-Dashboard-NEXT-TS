export const weeklyAttendance = [
    { attendance: 165, day: "Mon" },
    { attendance: 140, day: "Tue" },
    { attendance: 112, day: "Wed" },
    { attendance: 134, day: "Thu" },
    { attendance: 147, day: "Fri" },
    { attendance: 109, day: "Sat" },
    { attendance: 98, day: "Sun" },
];

export const monthlyAttendance = [
    { attendance: 148, month: "Jan" },
    { attendance: 137, month: "Feb" },
    { attendance: 158, month: "Mar" },
    { attendance: 98, month: "Apr" },
    { attendance: 95, month: "May" },
    { attendance: 104, month: "Jun" },
    { attendance: 94, month: "Jul" },
    { attendance: 127, month: "Aug" },
    { attendance: 130, month: "Sep" },
    { attendance: 165, month: "Oct" },
    { attendance: 128, month: "Nov" },
    { attendance: 156, month: "Dec" },
]

export const todayActivity = {
    crew: 9, employees: 96, equipment: 6, timesheets: 0 
}

export const crewCols = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "crewName", headerName: "Crew name", width: 120 },
    { field: "crewMembers", headerName: "Crew members", width: 120 },
    { field: "equipment", headerName: "Equipment", width: 120 },
  
]

export const crewList = [
    { id: 1, crewName: "Concrete", crewMembers: 6, equipment: 2 },
    { id: 2, crewName: "Pipe burst",  crewMembers: 5, equipment: 2 },
    { id: 3, crewName: "Clean up",  crewMembers: 4, equipment: 1 },
    { id: 4, crewName: "Point repair",  crewMembers: 7, equipment: 3 },
    { id: 5, crewName: "Concrete",  crewMembers: 5, equipment: 2 },
    { id: 6, crewName: "Water",  crewMembers: 6, equipment: 2 },
    { id: 7, crewName: "Sewer",  crewMembers: 8, equipment: 3 },
    { id: 8, crewName: "Drain",  crewMembers: 5, equipment: 1 },
    { id: 9, crewName: "Concrete",  crewMembers: 5, equipment: 2 },
    { id: 10, crewName: "Water",  crewMembers: 6, equipment: 2 },
]



export default  [
    weeklyAttendance,
    monthlyAttendance,
    crewCols,
    crewList,
]
