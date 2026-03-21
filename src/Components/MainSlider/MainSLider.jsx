import React, { useEffect, useState } from "react";
import { SliderData } from "./Data";
function MainSLider() {
  const [activeSlider, setActiveSlider] = useState(0);

  useEffect(() => {
    const currentIndex = setInterval(() => {
      setActiveSlider((previous) => (previous + 1) % SliderData.length);
    }, 3000);
    return () => clearInterval(currentIndex);
  }, []);

  return (
    <>
      <div className=" w-screen h-screen items-center  ">
        {SliderData.map((data, index) => (
          <div>
            <div
              key={data.id}
              className={` absolute w-full h-full  transition-transform duration-700 ease-in-out   ${
                index === activeSlider
                  ? "translate-x-0"
                  : index ===
                    (activeSlider + SliderData.length) % SliderData.length
                  ? "translate-x-full"
                  : "-translate-x-full"
              }`}
             >
              <div
                className="w-full h-full bg-cover bg-center flex flex-col  justify-center text-white  relative"
                style={{
                  backgroundImage: `url(${data.image})`,
                }}
              >
                <div className="absolute inset-0 bg-[#212D2B]/40"> </div>
                <div className="relative z-10 sm:w-[50%] xl:w-[50%] sm:p-4 xl:p-24 ">
                  <div className="">
                    <div className="text-xl font-['Caveat']  text-[var(--primary_color)] font-semibold  ">
                      {data.quote}
                    </div>

                    <div className="text-4xl font-bold">{data.title}</div>
                    <br />
                    <div>{data.description}</div>
                    <br />
                    <div className="flex gap-4 ">
                      <div className="w-[42%] text-center bg-[var(--primary_color)] flex justify-center items-center  text-white py-[10px] rounded-[25px]">
                        {data.btn1}
                      </div>
                      <div className="w-[42%]  flex justify-center items-center text-center border text-black py-[10px] rounded-[25px]">
                        {data.btn2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default MainSLider;
