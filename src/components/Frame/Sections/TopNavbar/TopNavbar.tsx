'use client'
import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
export const TopNavbar: React.FC = () => {
  
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);
    const scrollToForm = () => {
    document
      .getElementById("ConsultationForm")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();
  const handleClick=()=>{
    router.push("/");
  }

  const isActive = (href: string): boolean => pathName === href;

  return (
    <nav className="  flex fixed top-0 left-0   flex-col items-center w-full z-50 overflow-hidden py-4 bg-[#0b0f14]/70 backdrop-blur-md
  ">
   
      <section  className=" max-w-7xl w-full cursor-pointer flex  justify-between py-2 px-6 lg:px-20 xl:px-20 items-center">
        <div onClick={handleClick}>
        <h4 className={`text-xl  font-bold  ${isOpen ? 'hidden' : 'block'}`}> <span className="text-primary">Shivam</span> Tidke</h4>

        </div>

       
        <div className="hidden lg:flex ml-10">
          <ul className="flex md:gap-8 lg:gap-8 nav_list text-secondary-2 font-semibold">
            
              <li className={`${isActive("/services") ? "text-primary " : ""}`}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={`${isActive("/about") ? "text-primary" : ""}`}>
              <Link href={"#about"}>About</Link>
            </li>
            <li className={`${isActive("/blogs") ? "text-primary" : ""}`}>
              <Link href={"#project"}>Projects</Link>
            </li>
            <li  className={`${isActive("/contact") ? "text-primary" : ""}`}>
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ul>
        </div>


       


        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white  focus:outline-none"
          >
            {isOpen ? <RxCross1 size={28}/> : 
            <RxHamburgerMenu  size={28}/>
            }
          </button>
        </div>
      </section>


      {isOpen && (
        <div className="lg:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4 text-primary">
           
            <li className={`${isActive("/services") ? "text-primary" : ""}`}>
              <Link href={"/"} onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className={`${isActive("/about") ? "text-primary" : ""}`}>
              <Link href={"#about"} onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className={`${isActive("/blog") ? "text-primary" : ""}`}>
              <Link href={"#project"} onClick={() => setIsOpen(false)}>Project</Link>
            </li>
            <li className={`${isActive("/contact") ? "text-primary" : ""}`}>
              <Link href={"#contact"} onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>

        
        </div>
      )}
    </nav>
  );
};
