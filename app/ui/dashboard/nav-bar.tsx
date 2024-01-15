"use client";
import Image from "next/image";
import { useState } from "react";
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import clsx from "clsx";
import Navlinks from "./nav-links";

export default function Navbar() {
  const [open,setOpen] = useState(false);
  return (
    
   <nav className="flex flex-wrap justify-between bg-slate-500  h-18 ">
     <Image 
      src="/employeeLogo.png" 
      alt="company logo"
      width={50}
      height={50}
      className="pl-3 py-5"
     />
    <button onClick={() => setOpen(!open)} className="md:hidden pr-1 pt-2">
      { open ? <CloseRoundedIcon/> : <DehazeRoundedIcon/> }
    </button>
    <div className={clsx( 
        open ? " MOBILE md:hidden bg-slate-400/75 h-38 pl-3 w-full underline":
        "DESKTOP hidden md:flex gap-3 mt-10 pr-3"
        )}>
         <Navlinks />
    </div>       
   </nav>
  );
}