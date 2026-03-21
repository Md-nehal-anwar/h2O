import React from "react";
// import "./help.css";
import {MdOutlineVolunteerActivism, MdOutlineCardGiftcard} from 'react-icons/md'

export default function Helpus() {
  return (
    <section >
      <div className=" flex flex-col justify-center items-center"> 
        <div className="py-6">
        <p className="font-['Caveat'] text-3xl text-[var(--secondary_color)] font-bold text-center ">
          Help & donate us now
        </p>
        <p className="font-bold text-3xl text-center font-['Nunito']">
          Find the popular cause and donate them
        </p>
      </div>
      <div className="">
        <div className="p-6  md:flex  md:justify-center md:items-center md:gap-10 ">
          <div
            className="p-4 text-white bg-[var(--secondary_color)]  rounded-4xl w-80 md:h-110  "
            style={{ backgroundImage: `url("/assests/shape-2.png")` }}
          >
            <div className="flex ">
              <div className=" flex justify-center items-center  mt-2 rounded-full  bg-[var(--secondary_color)] p-4  ">
                <MdOutlineVolunteerActivism className="text-white " size={50} />
              </div>
              <p className=" font-bold text-3xl text-center font-['Nunito'] p-2">
                Became a Member of our Donor Family
              </p>
            </div>
            <p className="font-['Caveat'] pt-4 text-3xl leading-6 ">
              Lorem ipsum dolor sit amet consectetur.sit amet consectetur
            </p>
            <ul className="py-4 text-['Manrope']">
              <li className="">Lorem ipsum dolor sit amet consectetur</li>
              <li className="">Lorem ipsum dolor sit amet consectetur</li>
              <li className="">Lorem ipsum dolor sit amet consectetur</li>
            </ul>
            <div className="flex justify-center">
              {" "}
              <button className=" bg-white text-black w-30 p-2 rounded-2xl ">
                View Details
              </button>
            </div>
          </div>
          <div
            className="p-4 mt-6 md:mt-0 text-white bg-[var(--primary_color)] rounded-4xl w-80  md:h-110  "
            style={{ backgroundImage: `url("/assests/shape-2.png")` }}
          >
            <div className="flex items-center ">
              <dev className="flex justify-center items-center  mt-2 rounded-full  bg-[var(--primary_color)] p-4  ">
                <MdOutlineCardGiftcard size={50} />
              </dev>
              <p className="flex justify-center items-center font-bold text-3xl text-center font-['Nunito'] p-2 ">
                Get involved with us
              </p>
            </div>
            <p className="font-['Caveat'] pt-4 text-3xl leading-6  ">
              Lorem ipsum dolor sit amet consectetur.sit amet consectetur
            </p>
            <ul className=" text-['Manrope'] py-4">
              <li className=" ">Lorem ipsum dolor sit amet consectetur</li>
              <li className="">Lorem ipsum dolor sit amet consectetur</li>
              <li className="">Lorem ipsum dolor sit amet consectetur</li>
              <li className="">Lorem ipsum dolor sit amet consectetur</li>
              <li className="">Lorem ipsum dolor sit amet consectetur</li>
              <li className="">Lorem ipsum dolor sit amet consectetur</li>
             
            </ul>
            <div className="flex justify-center">
              {" "}
              <button className="bg-white text-black w-30 p-2 rounded-2xl">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
