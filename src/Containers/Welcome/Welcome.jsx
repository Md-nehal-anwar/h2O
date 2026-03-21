import React from "react";

import { GiBlackHandShield } from "react-icons/gi";
import { FaDonate } from "react-icons/fa";

export default function Welcome() {
  return (
    <section>
      <div className="block md:flex md:py-20    ">
        <div className="flex   justify-center items-center md:pl-25 ">
          <div
            className=" absolute z-10  h-80 w-70 
             border-[6px] border-[var(--primary_color)] 
             rounded-b-full xl:w-140 xl:h-132   "
          ></div>
          <div className="flex justify-center items-center  ">
            <img
              className=" relative  rounded-b-full h-80 w-70  object-cover md:w-480 md:h-140 "
              src="/assests/blood020.jpg"
              alt="image"
            />
          </div>
        </div>
        <div className="md:pr-14 md:pl-6 ">
          <div className=" text-center md:text-left ">
            <div className="">
              <div className=" font-['Caveat'] font-bold text-2xl text-[var(--secondary_color)] md:px-4 md:text-3xl md:pt-4 ">
                Welcome to Human Hood Organization
              </div>
              <div className="  font-bold text-3xl  font-['Nunito'] px-2 md:px-4 md:text-5xl">
                Helping each other can make world better
              </div>
            </div>
            <div className="px-4 py-2 md:pb-4">
              <p className="text-justify text-gray-400  font-['Manrope']  ">
                We all believe that service to humanity is as equal to serving
                god. We are a team of aspiring and inspiring youth. We are
                continuously imposing our efforts to make this world a better
                place. We try our best to deliver aid, care and relief. H20 -
                Human Hood organization is an NGO that came into existence in
                2017 and still contributing for a major cause.
              </p>
            </div>
          </div>

          <div>
            <div className="px-4 text-justify  ">
              <div className="flex items-center gap-2">
                <div className="h-16 md:h-12 border-l-8 border-[var(--secondary_color)]  "></div>
                <p className="py-2 font-['Manrope']">
                  Raised fund{" "}
                  <strong className="text-[var(--primary_color)]">
                    Upto 10 Lakhs{" "}
                  </strong>
                  Several Projects in{" "}
                  <strong className="text-[var(--primary_color)]">
                    {" "}
                    Bihar{" "}
                  </strong>
                  Benefiting{" "}
                  <strong className="text-[var(--primary_color)]">
                    Thousands
                  </strong>{" "}
                  of People
                </p>
              </div>
              <div>
                <div className="md:flex md:gap-30 md:py-4 ">
                  <div className="flex md:block   py-2 gap-4 ">
                    <span className="flex  md:pb-2 justify-center items-center">
                      <GiBlackHandShield
                        size={70}
                        className="text-[var(--secondary_color)] "
                      />
                    </span>
                    <div className="">
                      <div className="md:flex md:flex-col md:justify-center md:items-center">
                        {" "}
                        <p className="font-bold text-2xl font-['Nunito'] ">
                          Join Our Team
                        </p>
                      </div>
                      <div>
                        {" "}
                        <p className="font-['Manrope']  ">
                          Let's join the team and stand together in every battle
                          of ours.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:block  py-2 gap-4">
                    <span className="flex  md:pb-2  justify-center items-center">
                      <FaDonate
                        size={70}
                        className="text-[var(--secondary_color)]"
                      />
                    </span>
                    <div className="md:flex md:flex-col md:justify-center md:items-center">
                      <p className="font-bold text-2xl font-['Nunito']">
                        Donate Us
                      </p>
                      <p className="font-['Manrope']">
                        The only duty we need to perform is the duty of
                        Humanity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-4  ">
                <button className=" font-['Nunito'] w-[40%]  text-center bg-[var(--primary_color)] flex justify-center items-center  text-white py-2 rounded-[25px] ">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
