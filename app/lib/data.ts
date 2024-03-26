"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { State } from "./definitions";

const FormSchema = z.object({
    name: z.string({
        invalid_type_error: "Please enter a valid name."
    }),
    role: z.string({
        invalid_type_error: "Please enter a valid role."
    }),
    email: z.string({
        invalid_type_error: "Please enter a valid email."
    }),

});

export async function createEmployee(prevState: any, formData: FormData){
    const employee = FormSchema.safeParse({
        name: formData.get("name"),
        role: formData.get("role"),
        email: formData.get("email"),
    });

    console.log(employee);

    if(!employee.success) {
        return {
            message: "Please enter valid credentials."
        }
    };
    
    const res = await fetch('http://localhost:8088/api/v1/employee/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      })
     
      const data = await res.json()
      console.log(data);

      revalidatePath('/dashboard/employees');
      redirect('/dashboard/employees');
      
    }