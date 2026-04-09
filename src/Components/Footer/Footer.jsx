import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillMail,
  AiFillPhone,
  AiOutlineHeart,
} from "react-icons/ai";


export default function Footer() {
  return (
    <>
      <section className="relative  bg-[url('/assests/Gallery/gallery10.jpg')] bg-cover inset-0 bg-center py-8 md:py-24  px-4  md:px-24 text-white mt-20">
        <div className="bg-black opacity-86 absolute inset-0"></div>
        <div className=" block md:flex gap-30 relative z-10 ">
          <div className=" ">
            <div className="  font-bold text-3xl leading-6  ">
              <div className="font-['Nunito']" >HumanHood</div>
              <div className="font-['caveat'] text-[var(--primary_color)] ">Organization</div>
            </div>
          <div className=" w-88 md:w-100 py-4  opacity-60 ">
              <p className=" font-['manrope'] text-justify ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sint
              provident sunt assumenda blanditiis quia error commodi minima.
            </p>
          </div>
            <button className="flex gap-2 bg-[var(--primary_color)]  p-4 w-40 text-center rounded-3xl mt-4 mb-8 md:mb-0">
              <AiOutlineHeart size={25} color="black" />
              Donate Now
            </button>
          </div>

          <div className="font-['manrope'] mb-8 md:mb-0 ">
            <div className=" font-semibold text-xl font-['Nunito'] mb-2">Links</div>
            <div className="font-['manrope'] leading-8 opacity-60 ">
            <div className=" ">About Us</div>
            <div className=" ">Contact Us</div>
            <div className=" ">Our Causes</div>
            <div className=" ">Our Works</div>
            <div className=" ">Recent Events</div>
            <div className=" ">Donations</div>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-xl font-['Nunito'] mb-2">Non profit</h3>
            <div className="font-['manrope'] leading-8 opacity-60">
            <div className=" ">Blood Donation</div>
            <div className=" ">Help Homeless Children</div>
            <div className=" ">Clean Pure Water</div>
            <div className=" ">Give Them Education</div>
            <div className=" ">Reduce Hunger</div>
            <div className=" ">Make Someone Happy</div>
            </div>
          </div>


          <div className=" ">
            <h3 className="font-semibold text-xl font-['Nunito'] mb-2">Contact</h3>



            <div className="font-['manrope'] leading-8 opacity-60">
              <div className=" ">New Nagmatia Road, Gaya-Bihar 823001</div>
            <div className="flex gap-2">
              <div><AiFillMail size={20} color="#FBD45A" /></div> 
              <div>contact@humanhood.org</div>
            </div>
            <div className="flex gap-2">
              <div><AiFillPhone size={20} color="#FBD45A" /> </div>
              <div>+91(7277828188)</div>
            </div>
            <div className="flex gap-4 py-2 ">
              <span className="">
                <AiOutlineTwitter size={24} color="#FBD45A"  />
              </span>
              <div className="">
                <AiOutlineFacebook size={24} color="#FBD45A"  />
              </div>
              <div className="">
                <AiOutlineInstagram size={24} color="#FBD45A" />
              </div>
              <div className="">
                <AiOutlineLinkedin size={24} color="#FBD45A" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-[#212d2b] flex justify-center items-center p-4 ">
        <div className="   text-white"> © All Copyright 2022 by HumanHood </div>
      </div>
    </>
  );
}






//  <section className="footer">
//       <div className="footer_overly"></div>
//       <div className="footer_box_conatiner">
//         <div className="footer_box">
//         <div className="logo f_c">
//           <h3>HumanHood</h3>
//           <strong>Organization</strong>
//         </div>
//           <p className="description_black_grey_2">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sint
//             provident sunt assumenda blanditiis quia error commodi minima.
//           </p>
//           <button className="btn-primary_dark"><AiOutlineHeart size={25} color="black"/>Donate Now</button>
//         </div>
//         <div className="footer_box_middle">
//           <h3 className="footer_title">Links</h3>
//             <div className="links description_black_grey_2  before">About Us</div>
//             <li className="links description_black_grey_2 before">Contact Us</li>
//             <li className="links description_black_grey_2 before">Our Causes</li>
//             <li className="links description_black_grey_2 before">Our Works</li>
//             <li className="links description_black_grey_2 before">Recent Events</li>
//             <li className="links description_black_grey_2 before">Donations</li>
//         </div>
//         <div className="footer_box_middle">
//           <h3 className="footer_title">Non profit</h3>
//             <li className="links description_black_grey_2 before">Blood Donation</li>
//             <li className="links description_black_grey_2 before">Help Homeless Children</li>
//             <li className="links description_black_grey_2 before">Clean Pure Water</li>
//             <li className="links description_black_grey_2 before">Give Them Education</li>
//             <li className="links description_black_grey_2 before">Reduce Hunger</li>
//             <li className="links description_black_grey_2 before">Make Someone Happy</li>
//         </div>
//         <div className="footer_box">
//           <h3 className="footer_title">Contact</h3>
//             <li className="links description_black_grey_2">New Nagmatia Road,
//              Gaya-Bihar 823001</li>
//             <li className="links description_black_grey_2"><AiFillMail size={20} color="#FBD45A"/> contact@humanhood.org</li>
//             <li className="links description_black_grey_2"><AiFillPhone size={20} color="#FBD45A"/> +91(7277828188)</li>
//             <li className="links social">
//               <span className="links_icons">
//                 <AiOutlineTwitter />
//               </span>
//               <span className="links_icons">
//                 <AiOutlineFacebook />
//               </span>
//               <span className="links_icons">
//                 <AiOutlineInstagram />
//               </span>
//               <span className="links_icons">
//                 <AiOutlineLinkedin />
//               </span>
//             </li>
//         </div>
//       </div>
//     </section>
//     <div className="footerbar">© All Copyright 2022 by HumanHood</div>
