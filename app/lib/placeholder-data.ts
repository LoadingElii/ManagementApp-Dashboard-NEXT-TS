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


export const crewList = [
    { id: 1, crewName: "Concrete-01", crewMembers: 6, equipment: 2, crewlink:"/dashboard"},
    { id: 2, crewName: "Pipe burst-01",  crewMembers: 5, equipment: 2 , crewlink:"/dashboard"},
    { id: 3, crewName: "Clean up-01",  crewMembers: 4, equipment: 1, crewlink:"/dashboard"}, 
    { id: 4, crewName: "Point repair-01",  crewMembers: 7, equipment: 3, crewlink:"/dashboard"},
    { id: 5, crewName: "Concrete-02",  crewMembers: 5, equipment: 2, crewlink:"/dashboard" },
    { id: 6, crewName: "Water-01",  crewMembers: 6, equipment: 2, crewlink:"/dashboard" },
    { id: 7, crewName: "Sewer-01",  crewMembers: 8, equipment: 3, crewlink:"/dashboard"  },
    { id: 8, crewName: "Drain-01",  crewMembers: 5, equipment: 1, crewlink:"/dashboard"  },
    { id: 9, crewName: "Concrete-03",  crewMembers: 5, equipment: 2, crewlink:"/dashboard"  },
    { id: 10, crewName: "Water-02",  crewMembers: 6, equipment: 2, crewlink:"/dashboard"  },
]

class crew {
    id: number | undefined;
    crewName: String | undefined;
    crewMembers: number | undefined;
    equipment: number | undefined;

    constructor(id: number, 
        crewName: String, 
        crewMembers: number, 
        equipment: number ) {
            this.id = id;
            this.crewName = crewName;
            this.crewMembers = crewMembers;
            this.equipment = equipment;

    }
}

export const employeeList = [
    {id: 1, name: "Steve Davidson", email: "stevetheman01@gmail.com", role: "Foreman"},
    {id: 2, name: "Troy Landon", email: "troy@gmail.com", role: "Foreman"},
    {id: 3, name: "Sam Edwards", email: "sam@gmail.com", role: "Operator"},
    {id: 4, name: "George Robinson", email: "george@gmail.com", role: "Operator"},
    {id: 5, name: "Devin Bruce", email: "devin01@gmail.com", role: "Operator"},
    {id: 6, name: "Alex Bush", email: "alexman0@gmail.com", role: "Laborer"},
    {id: 7, name: "Byran Holton", email: "bryan01@gmail.com", role: "Laborer"},
    {id: 8, name: "Walter Waters", email: "walterheman01@gmail.com", role: "Laborer"},
    {id: 9, name: "Paul Thomas", email: "Paulthan01@gmail.com", role: "Laborer"},
    {id: 10, name: "Mike Wilson", email: "mikee1@gmail.com", role: "Laborer"},
    
]

export const equipmentList = [
    {id:1, brand: "John Deere", type: "Excavator" },
    {id:2, brand: "Caterpillar", type: "Skid Steer " },
    {id:3, brand: "Caterpillar", type: "Excatvator" },
    {id:4, brand: "John Deere", type: "Excaatvator" },
    {id:5, brand: "Komatsu", type: "Backhoe" },
    {id:6, brand: "John Deere", type: "Backhoe" },
    {id:7, brand: "Hitachi", type: "Loader" },
    {id:8, brand: "Komatsu", type: "Excatvator" },
    {id:9, brand: "Volvo", type: "Excatvator" },
    {id:10, brand: "John Deere", type: "Backhoe"},
]


