import React, { useContext } from "react";
import { donateData } from "./DonateData";
import { AppContext } from "../../Helper/Context";
import ProgressBar from "./Progress";
export default function Donate() {
  // eslint-disable-next-line no-unused-vars
  const { page, setPage } = useContext(AppContext);

  return (
    <section>
      <div className="flex flex-col justify-center  items-center py-6 md:px-100  md:py-0 md:pb-12">
        <div className="font-['Caveat'] text-2xl text-[var(--secondary_color)] font-bold md:text-3xl ">
          Help & donate us now
        </div>
        <div className="text-3xl text-center font-bold font-['Nunito'] md:text-5xl ">
          Find the popular cause and donate them
        </div>
      </div>
      {page === 0 ? (
        <div className="flex  flex-col justify-center items-center gap-12 md:flex-row md:gap-46 ">
          {donateData.slice(0, 3).map((item) => {
            return (
              <div className=" w-80  rounded-3xl shadow-xl/20   " key={item.id}>
                <div className="z-10 absolute font-['Nunito'] w-26 mt-40 ml-4 text-center bg-[var(--primary_color)] flex justify-center items-center  text-white py-2 rounded-[25px]">
                  {item.category}
                </div>
                <div className="relative group overflow-hidden rounded-t-3xl ">
                  <div
                    className=" absolute inset-0 bg-black/60 flex justify-center items-center text-white 
                     transform -translate-y-full group-hover:translate-y-0
                     transition-all duration-500 "
                  ></div>
                  <img className=" rounded-t-3xl " src={item.image} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center pt-6 px-6 ">
                  <h3 className="text-2xl font-['Nunito'] font-bold ">
                    {item.title}
                  </h3>
                  <p className="font-['Manrope'] text-gray-400  text-justify">
                    {item.describe}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center p-4">
                  <div className="flex flex-col justify-center items-center bg-[#F9F4E8] p-6 px-6 rounded-3xl ">
                    <div>
                      <ProgressBar value={32} max={100} />
                    </div>
                    <div className="flex gap-10">
                      <p className="font-['Manrope']">
                        Raised{" "}
                        <strong className="text-[var(--secondary_color)]">
                          : 40K
                        </strong>
                      </p>
                      <p className="font-['Manrope']">
                        Target{" "}
                        <strong className="text-[var(--secondary_color)]  ">
                          : 90K
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          {donateData.map((item) => {
            return (
              <div key={item.id}>
                <div>{item.category}</div>
                <div>
                  <div></div>
                  <img src={item.image} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.describe}</p>
                <div>
                  <progress id="file" value="32" max="100">
                    {" "}
                    32%{" "}
                  </progress>
                  <div>
                    <span>
                      Raised <strong>: 40K</strong>
                    </span>
                    <span>
                      Target <strong>: 90K</strong>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
