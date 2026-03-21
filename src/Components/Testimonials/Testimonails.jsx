import React, { useEffect, useRef, useState } from "react";
import "./testi.css";
import { testiData } from "./testidata";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ImQuotesRight } from "react-icons/im";

export default function Testi() {
  const [active, setActive] = useState(0);
  const intervalRef =useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testiData.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

function leftTesti() {
  clearInterval(intervalRef.current);
  if (active === 0) {
    return; 
  } else {
    setActive(active - 1);
  }
   
}

function rightTesti() {
  clearInterval(intervalRef.current);
  if (active === testiData.length - 1) {
    return; 
  } else {
    setActive(active + 1);
  }
}

  return (
    <section className="relative bg-[url('/assests/testicover.jpg')] bg-cover inset-0 bg-center h-160">
      
      <div className="absolute">
        <div className="pl-164 mt-10">
          <img
            className="  w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2 opacity-100 "
            src={testiData[0].image}
          />
        </div>
        <div className="pl-330  mt-[-60px]">
          <img
            className="  w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2  "
            src={testiData[1].image}
          />
        </div>
        <div className="pl-320 mt-60">
          <img
            className="  w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2  "
            src={testiData[2].image}
          />
        </div>
        <div className="pl-160 mt-[-100px]">
          <img
            className="  w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2  "
            src={testiData[3].image}
          />
        </div>
      </div>

      
      <div className="">
        <div className=" absolute bg-[rgba(12,10,10,0.76)] inset-0"></div>

        <div className="flex justify-between p-24">
          <div className="w-130 flex flex-col justify-center gap-4">
            <span className="sub_heading_left_main m-b-10">
              Our Testimonials
            </span>
            <h3 className="heading_left_testi">
              What They Are Talking About H20
            </h3>
            <p className="description_black_grey">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              sapiente ratione consequatur molestiae modi? Optio cumque ipsum
              praesentium accusantium nihil laborum illum officiis incidunt.
              Aspernatur debitis obcaecati architecto eveniet quod.
            </p>
            <button className="primary_button_dark ">All Testimonials</button>
          </div>
          <div className="nav_testi_button">
            <div className="left_testi" onClick={() => leftTesti()}>
              <AiOutlineLeft />
            </div>
            <div className="right_testi" onClick={() => rightTesti()}>
              <AiOutlineRight />
            </div>
          </div>
          <div className="w-1/2 mt-30   ">
            {testiData.map((item, index) => {
              return (
                <div
                  className={`  ${index === active ? "opacity-100" : "opacity-0 absolute top-0"}  `}
                  key={item.id}
                >
                  <div className=" relative bg-white border-4 border-[var(--primary_color)] rounded-2xl pt-14 p-4 h-60 ">
                    <div className="absolute flex   ">
                      <div className="mt-[-170px]">
                        <img
                          className=" w-38 h-38 bg-cover border-4 border-[var(--primary_color)] rounded-full "
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="  ">
                        <div className="font-bold text-2xl font-['Nunito'] text-white mt-[-130px] px-4 ">
                          {item.name}
                        </div>
                        <div className="font-bold text-2xl font-['caveat'] px-4 text-[var(--primary_color)]">
                          {item.desgination}
                        </div>
                      </div>
                      <div className="absolute pl-110     ">
                        <div className="  mt-[-110px]  h-20 w-20 flex justify-center items-center bg-[var(--secondary_color)] rounded-full ">
                          <ImQuotesRight size={22} color="white" />
                        </div>
                      </div>
                    </div>
                  <p className="text-xl text-gray-500 leading-6 ">{item.testi}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

