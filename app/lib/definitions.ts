export type Crew = {
    id: number;
    name: string;
    members: Employee[];
    equipment: Equipment[];
}

export type Employee = {
    id: number;
    name: string;
    password: string;
    role: string;
}

export type Equipment = {
    id: number;
    brand: string;
    type: string;
    equipmentId: number;
}