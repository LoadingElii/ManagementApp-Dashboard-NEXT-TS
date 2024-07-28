"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CREW_BASE_URL, EMPLOYEE_BASE_URL, EQUIPMENT_BASE_URL, user } from "./placeholder-data";
import { Crew, Employee, Equipment } from "./definitions";
import { getEmployee } from "./data";


//Login actions
export async function submitLoginInfo(formData: FormData) {
  const loginAttempt = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  if (loginAttempt.username === user.username) {
    if (loginAttempt.password === user.password) {
      return redirect("/dashboard");
    }
  }
}

//Employee actions
export async function createEmployee(prevState: object, formData: FormData) {
  const employee = {
    name: formData.get("name"),
    password: formData.get("name")?.slice(0,2) + "1234",
    role: formData.get("role"),
    email: formData.get("email"),
  };


  if (!employee) {
    return {
      message: "Please enter valid credentials.",
    };
  }

  const res = await fetch(EMPLOYEE_BASE_URL + "/save", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  const data = await res.json();

  revalidatePath("/dashboard/employees");
  redirect("/dashboard/employees");
}

export async function updateEmployee(state:{message: string} | undefined, formData: FormData) { 
    const id = formData.get("id");

    const employee = {
      name: formData.get("name"),
      email:formData.get("email"),
      role: formData.get("role"),
      hours: 0,
    }
    console.log(id);

    if(!employee) {
        return {
           message:" Please enter valid credentials.", 
        }
    }

    const res = await fetch(EMPLOYEE_BASE_URL + "/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      "body": JSON.stringify(employee),
    });

    const data:Employee = await res.json();
    console.log("from java " + data);



    revalidatePath("/dashboard/employees/" + id);
    redirect("/dashboard/employees/");
}

export async function deleteEmployee( id : number) {
  const req = await fetch(EMPLOYEE_BASE_URL + "/delete/" + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
  })
  
  redirect("/dashboard/employees/");
}


//Equipment Actions
export async function createEquipment(prevState: object, formData: FormData) {
  const equipment = {
    name: formData.get("name"),
    brand: formData.get("brand"),
    type: formData.get("type"),
    equipmentId: formData.get("equipmentId"),
  };


  if (!equipment) {
    return {
      message: "Please enter valid credentials.",
    };
  }

  const res = await fetch(EQUIPMENT_BASE_URL + "/save", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(equipment),
  });

  const data = await res.json();

  revalidatePath("/dashboard/equipment");
  redirect("/dashboard/equipment");
}

export async function updateEquipment(state:{message: string} | undefined, formData: FormData) { 
    const id = formData.get("id");

    const equipment = {
      name: formData.get("name"),
      brand: formData.get("brand"),
      type: formData.get("type"),
      equipmentId: formData.get("equipmentId"),
    };
    console.log(id);

    if(!equipment) {
        return {
           message:" Please enter valid credentials.", 
        }
    }

    const res = await fetch(EQUIPMENT_BASE_URL + "/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      "body": JSON.stringify(equipment),
    });

    const data:Equipment = await res.json();
    console.log("from java " + data);



    revalidatePath("/dashboard/equipment/" + id);
    redirect("/dashboard/equipment/");
}

export async function deleteEquipment( id : number) {
  const req = await fetch(EQUIPMENT_BASE_URL + "/delete/" + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
  })
  
  redirect("/dashboard/equipment/");
}


//Crew Actions
export async function createCrew(prevState: object, formData: FormData) {


  const crew = {
    name: formData.get("name"),
    crewMembers: formData.getAll("crewMembers"),
    crewEquipment: formData.getAll("crewEquipment"),
  };



  console.log("TEST " + crew.crewMembers)


  if (!crew) {
    return {
      message: "Please enter valid credentials.",
    };
  }

  const res = await fetch(CREW_BASE_URL + "/save", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(crew),
  });

  console.log(crew);

  const data = await res.json();

  revalidatePath("/dashboard/crews");
  redirect("/dashboard/crews");
}

export async function updateCrew(state:{message: string} | undefined, formData: FormData) { 
    const id = formData.get("id");

    const crew = {
      name: formData.get("name"),
      members: formData.get("member"),
      equipment: formData.get("equipment"),
    };
    console.log(id);

    if(!crew) {
        return {
           message:" Please enter valid credentials.", 
        }
    }

    const res = await fetch(CREW_BASE_URL + "/update/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      "body": JSON.stringify(crew),
    });

    const data:Crew = await res.json();
    console.log("from java " + data);



    revalidatePath("/dashboard/crews/" + id);
    redirect("/dashboard/crews/");
}

export async function deleteCrew( id : number) {
  const req = await fetch(CREW_BASE_URL + "/delete/" + id, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
  })
  
  redirect("/dashboard/crews/");
}
