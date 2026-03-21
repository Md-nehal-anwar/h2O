import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillMail,
  AiFillPhone,
  AiOutlineHeart
} from "react-icons/ai";
import "./footer.css";

export default function Footer() {
  return (
    <>    <section className="footer">
      <div className="footer_overly"></div>
      <div className="footer_box_conatiner">
        <div className="footer_box">
        <div className="logo f_c">
          <h3>HumanHood</h3>
          <strong>Organization</strong>
        </div>
          <p className="description_black_grey_2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sint
            provident sunt assumenda blanditiis quia error commodi minima.
          </p>
          <button className="btn-primary_dark"><AiOutlineHeart size={25} color="black"/>Donate Now</button>
        </div>
        <div className="footer_box_middle">
          <h3 className="footer_title">Links</h3>
            <li className="links description_black_grey_2  before">About Us</li>
            <li className="links description_black_grey_2 before">Contact Us</li>
            <li className="links description_black_grey_2 before">Our Causes</li>
            <li className="links description_black_grey_2 before">Our Works</li>
            <li className="links description_black_grey_2 before">Recent Events</li>
            <li className="links description_black_grey_2 before">Donations</li>
        </div>
        <div className="footer_box_middle">
          <h3 className="footer_title">Non profit</h3>
            <li className="links description_black_grey_2 before">Blood Donation</li>
            <li className="links description_black_grey_2 before">Help Homeless Children</li>
            <li className="links description_black_grey_2 before">Clean Pure Water</li>
            <li className="links description_black_grey_2 before">Give Them Education</li>
            <li className="links description_black_grey_2 before">Reduce Hunger</li>
            <li className="links description_black_grey_2 before">Make Someone Happy</li>
        </div>
        <div className="footer_box">
          <h3 className="footer_title">Contact</h3>
            <li className="links description_black_grey_2">New Nagmatia Road,
             Gaya-Bihar 823001</li>
            <li className="links description_black_grey_2"><AiFillMail size={20} color="#FBD45A"/> contact@humanhood.org</li>
            <li className="links description_black_grey_2"><AiFillPhone size={20} color="#FBD45A"/> +91(7277828188)</li>
            <li className="links social">
              <span className="links_icons">
                <AiOutlineTwitter />
              </span>
              <span className="links_icons">
                <AiOutlineFacebook />
              </span>
              <span className="links_icons">
                <AiOutlineInstagram />
              </span>
              <span className="links_icons">
                <AiOutlineLinkedin />
              </span>
            </li>
        </div>
      </div>
    </section>
    <div className="footerbar">© All Copyright 2022 by HumanHood</div>
    </>

  );
}
