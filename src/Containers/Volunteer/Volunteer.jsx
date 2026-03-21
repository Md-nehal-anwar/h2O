import React from "react";


export default function Volunteer() {
  return (
    <section className="">
      <div className=" relative bg-[url('/assests/Causes.jpg')]  md:h-screen bg-cover bg-center mt-20 flex flex-col justify-center items-center ">
        <div className="absolute inset-0  "></div>
        <div className="flex flex-col justify-center items-center">
          <div className=" py-10 z-10 text-2xl font-['Caveat'] font-bold text-[var(--primary_color)] md:text-3xl">
            Become a Volunteers
          </div>
          <div className="z-10 pb-10 text-3xl font-bold font-['Nunito'] text-[var(--fourth_color)] text-center px-10 md:text-5xl">
            Join your hand with us for a better life and future
          </div>
          <button className=" z-10 font-['Nunito'] w-26 text-center bg-[var(--primary_color)]  text-white py-2 rounded-[25px] md:w-34">
            Join Now
          </button>
        </div>
        <div className="md:absolute md:mt-133  ">
          <img
            className="h-50 w-screen object-cover "
            src="/assests/shapes.png"
            alt="/"
          />
        </div>
      </div>
    </section>
  );
}
