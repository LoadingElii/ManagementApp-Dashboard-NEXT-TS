
import { unstable_noStore as noStore } from "next/cache";
import { Crew, Employee, Equipment } from "./definitions";
import { CREW_BASE_URL, EMPLOYEE_BASE_URL, EQUIPMENT_BASE_URL } from "./placeholder-data";


//Employee data
export default async function getAllEmployees() {

    noStore();
    const res = await fetch(EMPLOYEE_BASE_URL+ "/all", {
        method : "GET",
        headers : {
           "Content-Type" : "application/json" ,
        },
    })

    const data: Employee[] = await res.json();
    console.log(data)

    return data;
}

export async function getEmployee(id:number) {

    noStore();
    const res = await fetch(EMPLOYEE_BASE_URL +"/"+ id, { method: "GET" })
  
    const data:Employee = await res.json();
    console.log(data);
  
    return data;
}

//Equipment data
export async function getAllEquipment() {
    noStore();
    const res = await fetch(EQUIPMENT_BASE_URL + "/all", {method: "GET"})

    const data:Equipment[] = await res.json();
    console.log("EQUIPMENT GET ALL" + data)

    return data;
}

export async function getEquipment(id: number) {
    noStore();
    const res = await fetch(EQUIPMENT_BASE_URL + "/" + id, {method: "GET"})

    const data:Equipment = await res.json();
    console.log("SINGLE EQUIPMENT" + data);

    return data;
}

//Crew data
export async function getAllCrews() {
    noStore();
    const res = await fetch(CREW_BASE_URL + "/all", {method: "GET"})

    const data:Crew[] = await res.json();
    console.log("CREW GET ALL" + JSON.stringify(data));

    return data;
}

export async function getCrew(id: number) {
    noStore();
    const res = await fetch(CREW_BASE_URL + "/" + id, {method: "GET"})

    const data:Crew = await res.json();
    console.log("SINGLE CREW" + data);

    return data;
}