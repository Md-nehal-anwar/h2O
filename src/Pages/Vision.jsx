import React from "react";
import Hcontainer from "../Components/container/Hcontainer";
import "./Pages.css";

export default function Vision() {
  const text = {
    title: "Our Vision",
    subTitle: "Vision",
    navTitle: "Home",
    image: "./assests/Gallery/gallery2.jpg",
  };

  return (
    <>
      <Hcontainer
        title={text.title}
        subTitle={text.subTitle}
        navTitle={text.navTitle}
        image={text.image}
      />
      <section className="about_ngo">
        <div className="about_ngo_box1">
          <div className="ngo_img_box_1"></div>
          <div className="ngo_border_box"></div>
          <div className="ngo_img_box_2"></div>
        </div>
        <div className="about_ngo_box2">
          <p className="sub_heading_left">Our Vision</p>
          <h3 className="heading_left_">
            Get to know about our Human Hood organization Vision
          </h3>
          <p className="description_black_grey desc">
            Togetherness is what we strive for in everyday existence. H20
            assists to embark on creating a platform to bring the needy and
            considerate together to make the world a promising place. We are
            here to enroute the needs to the needful.
          </p>
          <div className="primary_button">About Us</div>
        </div>
      </section>
    </>
  );
}
