import React, { useState, useEffect, useRef } from "react";
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";
import { AboutMenu, WorkMenu, JoinUs, VolunteerMenuData } from "./dropdown";
import { HiMiniHeart } from "react-icons/hi2";
import { NavbarDropdown, MobileNavBar } from "./NavbarDropdown";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
   const DropDownList = useRef();
   const [DeskTopNav, setDeskTopNav] = useState(false);
  const navigate = useNavigate();

useEffect(()=>{
  function HandleDesktopScroll() {
    if(window.scrollY>0){
      setDeskTopNav(true);
    }
    else{
      setDeskTopNav(false)
    }
  }
   
  window.addEventListener("scroll",HandleDesktopScroll);

  HandleDesktopScroll();

  return () =>{
    window.removeEventListener("scroll",HandleDesktopScroll)
  };
      

},[])

  
useEffect(() => {
  //  Yeh function check karega ki click dropdown ke bahar hua ya nahi
  function handleClickOutside(event) {
    if (DropDownList.current && !DropDownList.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  // Scroll hone par dropdown band karna
  function handleScroll() {
    setIsOpen(false);
  }

  // Event listeners add karna
  document.addEventListener("mousedown", handleClickOutside);
  window.addEventListener("scroll", handleScroll);

  // Cleanup (component unmount hone par remove karna)
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
      <nav>
        <div
          className={` ${
            DeskTopNav ? "bg-[var(--secondary_color)]":"bg-transparent" 
          } fixed hidden md:flex justify-center items-center z-60 w-screen  `}
        >
          <div className="flex justify-around items-center h-30 w-screen   ">
            <div className="p-4 ">
              <p className=" leading-2 font-['Nunito'] text-2xl  text-[var(--fourth_color)] font-bold ">
                HumanHood
              </p>
              <p className=" px-3 text-2xl font-['Caveat'] text-[var(--primary_color)] font-semibold ">
                Organization
              </p>
            </div>
            <div>
              <div>
                <div className="flex justify-between  ">
                  <div className="flex justify-center items-center  ">
                    <div className="p-2">
                      <div className=" bg-[var(--primary_color)] p-2 rounded-full ">
                        <CiMail size={20} className="text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <p className=" text-xl font-['Caveat'] text-[var(--fourth_color)] font-semibold ">
                        contact@HumanHoodOrg
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center  ">
                    <div>
                      <div className=" bg-[var(--primary_color)] p-2 rounded-full ">
                        <FaPhone size={20} className="text-gray-500" />
                      </div>
                    </div>
                    <div className=" text-xl font-['Caveat'] text-[var(--fourth_color)] font-semibold p-2 ">
                      +918102773220
                    </div>
                  </div>
                </div>
                <div className="text-[var(--fourth_color)]">
                  <hr />
                </div>
                <div>
                  <ul className="flex gap-10 p-2 ">
                    <li className="relative group">
                      <div
                        className="font-['Nunito'] text-[var(--fourth_color) text-[var(--fourth_color)] group-hover:text-[var(--primary_color)] transition-colors duration-300 ] cursor-pointer"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </div>
                    </li>
                    <NavbarDropdown title="Who we are" items={AboutMenu} />
                    <li>
                      <NavbarDropdown title=" Our work" items={WorkMenu} />
                    </li>
                    <li>
                      <NavbarDropdown title="Join us" items={JoinUs} />
                    </li>
                    <li>
                      <NavbarDropdown
                        title="Volunteer"
                        items={VolunteerMenuData}
                      />
                    </li>
                    <li className="relative group">
                      <div
                        className="  font-['Nunito'] text-[var(--fourth_color)] group-hover:text-[var(--primary_color)] transition-colors duration-300 ]"
                        onClick={() => navigate("/contact")}
                      >
                        Contact us
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center p-2  gap-2 w-40 bg-[var(--fourth_color)] rounded-[25px] ">
              <div className="">
                <HiMiniHeart size={20} className="text-gray-500" />
              </div>
              <div className="font-['Manrope']">Donate Now</div>
            </div>
          </div>
        </div>
        {/* mobile nav */}

        <div className=" fixed  top-0 left-0  w-screen  flex  justify-between items-center p-4 md:hidden text-2xl z-50 cursor-pointer bg-[var(--secondary_color)] ">
          <p className=" flex items-center font-['Nunito'] text-2xl  text-[var(--fourth_color)] font-bold ">
            HumanHood
          </p>
          <div >
            {isOpen ? (
              <AiOutlineCloseCircle
                size={30}
                className="cursor-pointer text-[var(--fourth_color)]   "
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <AiOutlineMenu
                className="cursor-pointer text-[var(--fourth_color)] "
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
        {isOpen && (
          <ul
            ref={DropDownList}
            className="absolute z-20 top-16 left-0 w-screen  bg-black p-4 overflow-y-auto"
          >
            <li>
              <div
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                }}
                className="cursor-pointer font-['Nunito'] text-[var(--fourth_color)]"
              >
                Home
              </div>
            </li>

            <li>
              <MobileNavBar
                title="Who we are"
                items={AboutMenu}
                setIsOpen={setIsOpen}
              />
            </li>
            <li>
              <MobileNavBar
                title="Our work"
                items={WorkMenu}
                setIsOpen={setIsOpen}
              />
            </li>
            <li>
              <MobileNavBar
                title="Join us"
                items={JoinUs}
                setIsOpen={setIsOpen}
              />
            </li>
            <li>
              <MobileNavBar
                title="Volunteer"
                items={VolunteerMenuData}
                setIsOpen={setIsOpen}
              />
            </li>
            <li>
              <div
                className="font-['Nunito'] text-[var(--fourth_color)]"
                onClick={() => {
                  navigate("/contact");
                  setIsOpen(false);
                }}
              >
                Contact us
              </div>
            </li>

            <div className="flex justify-between p-2  ">
              <div className="bg-[var(--primary_color)] text-center p-2 w-[40%] rounded-[25px] font-['Nunito']  text-white">
                login
              </div>
              <div className="bg-[var(--primary_color)] text-center p-2 w-[40%] rounded-[25px]  text-white ">
                signup
              </div>
            </div>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Menu;
