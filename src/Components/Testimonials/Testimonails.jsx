import React, { useEffect, useRef, useState } from "react";
import "./testi.css";
import { testiData } from "./testidata";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ImQuotesRight } from "react-icons/im";

export default function Testi() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testiData.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  function leftTesti() {
    if (active === 0) {
      return;
    } else {
      setActive(active - 1);
    }
  }

  function rightTesti() {
    if (active === testiData.length - 1) {
      return;
    } else {
      setActive(active + 1);
    }
  }
  return (
    <>
      <div>
        <div className="relative bg-[url('/assests/testicover.jpg')] bg-cover inset-0 bg-center h-186 md:h-160 p-4 md:p-24">
          <div className=" absolute bg-[rgba(12,10,10,0.76)] inset-0"></div>
          <div className=" block md:flex md:justify-between ">
            <div className=" ">
              <div className="relative mb-26 z-10  md:w-130 block md:flex md:flex-col  md:gap-4">
                <div className=" mt-[10px]  font-['caveat'] font-bold text-xl md:text-2xl text-[var(--primary_color)] ">
                  Our Testimonials
                </div>
                <div className="font-['Nunito'] mb-4 md:mb-0 text-3xl md:text-5xl font-bold text-white ">
                  What They Are Talking About H20
                </div>
                <div className="font-['manrope']  text-white opacity-50 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora sapiente ratione consequatur molestiae modi? Optio
                  cumque ipsum praesentium accusantium nihil laborum illum
                  officiis incidunt. Aspernatur debitis obcaecati architecto
                  eveniet quod.
                </div>
                <div className="bg-[var(--primary_color)]  p-4 w-40 text-center rounded-3xl mt-4 ">
                  <button>All Testimonials</button>
                </div>
              </div>
            </div>
            <div className="  hidden md:block md:mt-2">
              <div className="  ">
                <img
                  className=" w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2 opacity-100 "
                  src={testiData[0].image}
                />
              </div>
              <div className="md:pl-130  mt-[-100px]">
                <img
                  className="w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2  "
                  src={testiData[1].image}
                />
              </div>
              <div className="md:pl-120 mt-80">
                <img
                  className="  w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2  "
                  src={testiData[2].image}
                />
              </div>
              <div className=" md:mt-[-160px]">
                <img
                  className="  w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2"
                  src={testiData[3].image}
                />
              </div>
            </div>
            <div className="absolute  md:mt-4">
              <div className=" md:pl-40  md:w-160   md:mt-30 ml-4 md:ml-160    ">
                {testiData.map((item, index) => {
                  return (
                    <div
                      className={`  ${index === active ? "opacity-100" : "opacity-0 absolute top-0"}  `}
                      key={item.id}
                    >
                      <div className=" relative bg-white border-4 border-[var(--primary_color)] rounded-2xl pt-14 p-4  w-80 md:w-full md:h-60 ">
                        <div className="absolute flex   ">
                          <div className=" mt-[-120px] md:mt-[-170px]">
                            <img
                              className=" w-24 h-24 md:w-38 md:h-38 bg-cover border-4 border-[var(--primary_color)] rounded-full "
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
                          <div className="absolute pl-58 md:pl-86     ">
                            <div className="mt-[-90px] md:mt-[-110px] h-12 w-12 md:h-20 md:w-20  flex justify-center items-center bg-[var(--secondary_color)] rounded-full ">
                              <ImQuotesRight md:size={22} color="white" />
                            </div>
                          </div>
                        </div>
                        <p className="text-xl text-gray-500 leading-6 ">
                          {item.testi}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

           <div className="absolute flex gap-2 bottom-8 md:bottom-36 z-10 right-16 md:right-44">
            <div
              className="p-4 bg-white hover:bg-[var(--secondary_color)]  rounded-full text-center hover:text-white  "
              onClick={() => leftTesti()}
            >
              <AiOutlineLeft />
            </div>
            <div
              className="p-4 bg-white hover:bg-[var(--secondary_color)]  rounded-full text-center hover:text-white  "
              onClick={() => rightTesti()}
            >
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <section className="relative bg-[url('/assests/testicover.jpg')] bg-cover inset-0 bg-center h-160 ">
      <div className="absolute hidden md:block">
        <div className="md:pl-164 mt-10">
          <img
            className="w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2 opacity-100 "
            src={testiData[0].image}
          />
        </div>
        <div className="md:pl-330  mt-[-60px]">
          <img
            className="w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2  "
            src={testiData[1].image}
          />
        </div>
        <div className="md:pl-320 mt-80">
          <img
            className="  w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2  "
            src={testiData[2].image}
          />
        </div>
        <div className="md:pl-160 md:mt-[-120px]">
          <img
            className="  w-26 h-26 bg-cover border-4 border-[var(--primary_color)] rounded-full animate-pulse translate-x-2"
            src={testiData[3].image}
          />
        </div>
      </div>
       
      <div className="">
        <div className=" absolute bg-[rgba(12,10,10,0.76)] inset-0"></div>
        <div className=" block md:flex md:justify-between md:p-24 relative ">
          <div className="md:absolute md:bottom-40 pl-1">
            <div className="   md:w-130 block md:flex md:flex-col md:justify-center md:gap-4">
              <div className=" mt-[10px] font-['caveat'] font-bold text-2xl text-[var(--primary_color)] ">
                Our Testimonials 
              </div>
              <div className="font-['Nunito'] text-5xl font-bold text-white ">
                What They Are Talking About H20
              </div>
              <div className="font-['manrope'] text-white opacity-50 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora sapiente ratione consequatur molestiae modi? Optio
                cumque ipsum praesentium accusantium nihil laborum illum
                officiis incidunt. Aspernatur debitis obcaecati architecto
                eveniet quod.
              </div>
              <div className="bg-[var(--primary_color)] p-4 w-40 text-center rounded-3xl mt-4 ">
                <button>All Testimonials</button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-2 bottom-40 z-10 right-36">
            <div
              className="p-4 bg-white hover:bg-[var(--secondary_color)]  rounded-full text-center hover:text-white  "
              onClick={() => leftTesti()}
            >
              <AiOutlineLeft />
            </div>
            <div
              className="p-4 bg-white hover:bg-[var(--secondary_color)]  rounded-full text-center hover:text-white  "
              onClick={() => rightTesti()}
            >
              <AiOutlineRight />
            </div>
          </div>
          <div className="w-1/2  md:mb-0  md:mt-30 ml-4 md:ml-160    ">
            {testiData.map((item, index) => {
              return (
                <div
                  className={`  ${index === active ? "opacity-100" : "opacity-0 absolute top-0"}  `}
                  key={item.id}
                >
                  <div className=" relative bg-white border-4 border-[var(--primary_color)] rounded-2xl pt-14 p-4  w-80 md:w-full md:h-60 ">
                    <div className="absolute flex   ">
                      <div className=" mt-[-120px] md:mt-[-170px]">
                        <img
                          className=" w-24 h-24 md:w-38 md:h-38 bg-cover border-4 border-[var(--primary_color)] rounded-full "
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
                      <div className="absolute pl-58 md:pl-110     ">
                        <div className="mt-[-90px] md:mt-[-110px] h-12 w-12 md:h-20 md:w-20  flex justify-center items-center bg-[var(--secondary_color)] rounded-full ">
                          <ImQuotesRight md:size={22} color="white" />
                        </div>
                      </div>
                    </div>
                    <p className="text-xl text-gray-500 leading-6 ">
                      {item.testi}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section> */
}
