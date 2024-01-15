"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/dashboard" },
    { name: "Crews", href: "/dashboard/crews"},
    { name: "Employees", href: "/dashboard/employees"},
    { name: "Equipment", href: "/dashboard/equipment"},
    { name: "Timesheets", href: "/dashboard/timesheets"},
    { name: "Sign Out", href: "/login"},
]

export default function Navlinks() {
    const pathname = usePathname();

    return (
     <>
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                "h-6 hover:text-blue-400" , 
               { "text-white": pathname === link.href, },
              )}
            >
             <p>{link.name}</p>  
           </Link> 
         );
         })}
     </>
    );
}
