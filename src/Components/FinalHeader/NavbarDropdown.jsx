import {Link} from "react-router-dom" ;
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export  function NavbarDropdown({title,items})  {
   
  const navigate = useNavigate();


return (
  <li className="relative group cursor-pointer">
    <div className="flex justify-center items-center font-['Nunito'] text-[var(--fourth_color)] group-hover:text-[var(--primary_color)] transition-colors duration-300">
      {title}
      <IoMdArrowDropdown className="ml-2" />
    </div>
    <div className="absolute hidden group-hover:block  bg-white shadow-lg rounded p-2 text-black min-w-[150px] z-20">
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <div onClick={()=>{navigate(item.path)}}>{item.name}</div>
            </li>
          );
        })}
      </ul>

      {/* <ul>
                          <li>
                            <Link to="/about">About us</Link>
                          </li>
                          <li>
                            <Link to="/version">Version</Link>
                          </li>
                          <li>
                            <Link to="/teams">Our team</Link>
                          </li>
                          <li>
                            <Link to="/work">Our work</Link>
                          </li>
                          <li>
                            <Link to="/impact">Our impact</Link>
                          </li>
                          <li>
                            <Link to="/causes">Our Causes</Link>
                          </li>
                        </ul> */}
    </div>
  </li>
);

}


export function MobileNavBar({title,items, setIsOpen}) {

  const [mobileList, setMobileList] = useState(false);
 
   const navigate = useNavigate();
     return (
       <>
         <div
           onClick={() => setMobileList(!mobileList)}
           className={`flex justify-between items-center  font-['Nunito']  ${
             mobileList
               ? "text-[var(--primary_color)]"
               : " text-[var(--fourth_color)]"
           } `}
         >
           {title}
           <RiArrowDropDownLine size={20} />
         </div>
         {mobileList && (
           <ul className="bg-[var(--secondary_color)]">
             {items.map((item, i) => {
               return (
                 <li
                   key={i}
                   className=" text-[var(--fourth_color)] font-['Caveat'] "
                 >
                   <div
                     onClick={() => {
                       navigate(item.path);
                       setMobileList(false);
                       setIsOpen(false);
                     }}
                   >
                     {item.name}
                   </div>
                 </li>
               );
             })}
           </ul>
         )}
       </>
     );
}