
import React, { useEffect, useState } from "react";

import { Eventdata } from "./eventdata";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Events() {
  const [active, setActive] = useState(0);
  const [displayCard, setDisplayCard] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setDisplayCard(3);
      } else {
        setDisplayCard(1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


    function leftCardBtn() {
      setActive((prev) => {
        // Go to the previous index, but not below 0
        const previousIndex = prev - 1;
        const lastIndex = Eventdata.length - displayCard;
        if (previousIndex < lastIndex) {
          return previousIndex;
        } else {
          return lastIndex;
        }
      });
    }

    // Corrected function to move to the next slide
    function rightCardBtn() {
      setActive((prev) => {
        const nextIndex = prev + 1;
        const lastIndex = Eventdata.length - displayCard;
        if (nextIndex > lastIndex) {
          return lastIndex;
        } else {
          return nextIndex;
        }

       
      });
    }

  return (
    <section>
      <div className="bg-[#F9F4E8] px-4 block md:flex p-10 overflow-hidden ">
        <div className="md:p-14 md:pl-21   md:w-1/3">
          <div>
            <p className="text-2xl md:text-3xl font-['Caveat'] text-[var(--secondary_color)] font-bold ">
              Upcoming Events
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-5xl font-['nunito'] font-bold pb-2">
              Join our latest upcoming events
            </p>
          </div>
          <div>
            <p className="font-['Manrope'] text-justify pb-4 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              officiis nobis ratione dignissimos fugit doloremque exercitationem
              sint ducimus rem nulla optio harum sunt, soluta ipsum modi
              deleniti in tempora quis!
            </p>
          </div>
          <div className="pb-8">
            <p className="font-['Nunito'] w-30  text-center bg-[var(--primary_color)]  text-white p-2  rounded-[25px]">
              Discover More
            </p>
          </div>
        </div>
               



        
        <div className=" overflow-hidden md:py-26 pl-4 md:w-full   " >

          <div  className="  flex  transition-transform duration-500 ease-in-out"
                        style={{
                          // This is the key change for sliding
                          transform: `translateX(-${active * (100 / displayCard)}%)`,
                        }}>
            {Eventdata.map((item)=>{
              return(
                  
              <div key={item.id}
                  className={`   ${
                    displayCard === 2 ? "w-1/3" : "w-full"
                  }  `}>
                   <div className=" relative group overflow-hidden px-4 md:pr-24  " >
                  <div className="absolute  bg-black/60 rounded-3xl   w-80  h-86  transform -translate-y-full group-hover:translate-y-0 transition-all duration-500"> </div> 
                   <div className="group  rounded-3xl  w-80  h-86 bg-center bg-cover  "
                     style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute  mt-4 flex ml-28 font-['Caveat'] font-bold w-40 text-xl text-center bg-[var(--primary_color)]  p-2   rounded-[25px]">
                      {item.date}
                    </div>
                    <div className="pt-50 absolute">
                      <ul>
                        <li className="flex  items-center">
                          <p className="text-[var(--primary_color)] text-2xl px-2 ">
                            {item.icon2}
                          </p>{" "}
                          <p className="text-2xl px-2 text-white font-bold font-['Manrope']">
                            {item.time}
                          </p>
                        </li>
                        <li className="flex  items -center">
                          <p className="text-[var(--primary_color)] text-2xl px-2 ">
                            {item.icon1}
                          </p>{" "}
                          <p className="text-2xl px-2 text-white font-bold font-['Manrope']">
                            {item.location}
                          </p>
                        </li>
                      </ul>
                      <div>
                        <p className="text-2xl px-3 text-white font-bold font-['Manrope']">
                          {item.title}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                 </div>
              </div>
              )

            })}
          </div>
            

          <div className="  inset-0 flex items-center justify-between  pt-4 px-20">
            <div
              onClick={leftCardBtn}
              className=" rounded-full  border-2 hover:border-white  h-10 w-10 flex justify-center items-center hover:bg-[var(--primary_color)]"
            >
              <AiOutlineLeft />
            </div>
            <div
              onClick={rightCardBtn}
              className="rounded-full border-2 hover:border-white h-10 w-10 flex justify-center items-center hover:bg-[var(--primary_color)]"
            >
              <AiOutlineRight />
            </div>
          </div>

        </div>      
        
      </div>
    </section>
  );
}



{/* <div className="relative overflow-hidden w-full md:pr-34 md:py-16">
          {/* ✅ sliding wrapper */}

          {/* <div
            className="flex flex-row transition-transform duration-500 ease-in-out"
                        style={{
                          // This is the key change for sliding
                          transform: `translateX(-${active * (100 / displayCard)}%)`,
                        }}
           >
            {Eventdata.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`   ${
                    displayCard === 2 ? "w-1/3" : "w-full"
                  } p-4 `}
                >
                 <div className="relative group overflow-hidden rounded-t-3xl ">
                  <div
                      className=" absolute inset-0 bg-black/60 flex justify-center items-center text-white 
                     transform -translate-y-full group-hover:translate-y-0
                     "
                    ></div>
                   <div
                    className="  group rounded-3xl  w-[280px]  h-[350px] bg-cover bg-center "
                    style={{ backgroundImage: `url(${item.image})` }}
                   >
                    {/* <div
                      className=" absolute inset-0 bg-black/60 flex justify-center items-center text-white 
                     transform-translate-y-full group-hover:translate-y-0
                     transition-all duration-500"
                    ></div> */}
                    {/* <div className="absolute  mt-4 flex ml-28 font-['Caveat'] font-bold w-40 text-xl text-center bg-[var(--primary_color)]  p-2   rounded-[25px]">
                      {item.date}
                    </div>
                    <div className="pt-50">
                      <ul>
                        <li className="flex  items-center">
                          <p className="text-[var(--primary_color)] text-2xl px-2 ">
                            {item.icon2}
                          </p>{" "}
                          <p className="text-2xl px-2 text-white font-bold font-['Manrope']">
                            {item.time}
                          </p>
                        </li>
                        <li className="flex  items-center">
                          <p className="text-[var(--primary_color)] text-2xl px-2 ">
                            {item.icon1}
                          </p>{" "}
                          <p className="text-2xl px-2 text-white font-bold font-['Manrope']">
                            {item.location}
                          </p>
                        </li>
                      </ul>
                      <div>
                        <p className="text-2xl px-3 text-white font-bold font-['Manrope']">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                 </div>
                </div>
              );
            })}
          </div> */} 
          {/* <div className=" absolute inset-0 flex items-center justify-between px-4">
            <div
              onClick={leftCardBtn}
              className=" rounded-full border-2 h-10 w-10 flex justify-center items-center"
            >
              <AiOutlineLeft />
            </div>
            <div
              onClick={rightCardBtn}
              className="rounded-full border-2 h-10 w-10 flex justify-center items-center"
            >
              <AiOutlineRight />
            </div>
          </div>
        </div> */} 


//         import React, { useEffect, useState } from "react";
// import { Eventdata } from "./eventdata";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// export default function Events() {
//   const [active, setActive] = useState(0);
//   const [displayCard, setDisplayCard] = useState(1);

//   useEffect(() => {
//     function handleResize() {
//       if (window.innerWidth >= 768) {
//         setDisplayCard(3);
//       } else {
//         setDisplayCard(1);
//       }
//     }

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // ✅ LEFT BUTTON
//   function leftCardBtn() {
//     setActive((prev) => {
//       if (prev <= 0) return 0;
//       return prev - 1;
//     });
//   }

//   // ✅ RIGHT BUTTON
//   function rightCardBtn() {
//     setActive((prev) => {
//       const lastIndex = Eventdata.length - displayCard;
//       if (prev >= lastIndex) return lastIndex;
//       return prev + 1;
//     });
//   }

//   return (
//     <section>
//       <div className="bg-[#F9F4E8] px-4 block md:flex p-10">

//         {/* LEFT CONTENT */}
//         <div className="md:p-14 md:w-1/3">
//           <p className="text-2xl md:text-3xl font-bold text-[var(--secondary_color)]">
//             Upcoming Events
//           </p>

//           <p className="text-3xl md:text-5xl font-bold pb-2">
//             Join our latest upcoming events
//           </p>

//           <p className="text-justify pb-4">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>

//           <div className="pb-8">
//             <p className="text-center bg-[var(--primary_color)] text-white p-2 rounded-full">
//               Discover More
//             </p>
//           </div>
//         </div>

//         {/* SLIDER */}
//         <div className="relative w-full overflow-hidden">

//           {/* Slides Container */}
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${active * (100 / displayCard)}%)`,
//             }}
//           >
//             {Eventdata.map((item) => (
//               <div
//                 key={item.id}
//                 className={`${
//                   displayCard === 3 ? "w-1/3" : "w-full"
//                 } flex-shrink-0 px-4`}
//               >
//                 <div className="relative group overflow-hidden rounded-3xl">

//                   {/* Image */}
//                   <div
//                     className="w-full h-[350px] bg-center bg-cover rounded-3xl"
//                     style={{ backgroundImage: `url(${item.image})` }}
//                   />

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-black/60 rounded-3xl transform -translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>

//                   {/* Content */}
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <p className="font-bold text-lg">{item.title}</p>
//                     <p>{item.location}</p>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={leftCardBtn}
//               className="rounded-full border-2 h-10 w-10 flex justify-center items-center"
//             >
//               <AiOutlineLeft />
//             </button>

//             <button
//               onClick={rightCardBtn}
//               className="rounded-full border-2 h-10 w-10 flex justify-center items-center"
//             >
//               <AiOutlineRight />
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

