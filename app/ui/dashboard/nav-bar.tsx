"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import DehazeRoundedIcon from '@mui/icons-material/DehazeRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import clsx from "clsx";
import Navlinks from "./nav-links";


export default function Navbar() {
  const [open,setOpen] = useState(false);
  const [width,setWidth] = useState(window.innerWidth);
  const resizePoint = 768;

  useEffect(() => {
    const handleResize = () => setWidth(width);

    window.addEventListener("resize", handleResize);   

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  },[width]);

  if( width <= resizePoint ) {
    return(
      <nav className="flex flex-wrap justify-between bg-slate-500  h-18 ">
     <Image 
      src="/employeeLogo.png" 
      alt="company logo"
      width={50}
      height={50}
      className="pl-3 py-5"
     />
      <button onClick={() => setOpen(!open)} className="pr-1 pt-2">
        { open ? <CloseRoundedIcon/> : <DehazeRoundedIcon/> }
      </button>
      <div onClick={() => setOpen(!open)} className={clsx( open ? 
        " MOBILE bg-slate-400/75 h-38 pl-3 w-full underline" : "hidden" 
        )}>
         <Navlinks />
      </div>       
   </nav>
    );

  }

  return (
    
   <nav className="flex flex-wrap justify-between bg-slate-500  h-18 ">
     <Image 
      src="/employeeLogo.png" 
      alt="company logo"
      width={50}
      height={50}
      className="pl-3 py-5"
     />
      <div className="DESKTOP md:flex gap-3 mt-10 pr-3">
         <Navlinks />
      </div>       
   </nav>
  );
}