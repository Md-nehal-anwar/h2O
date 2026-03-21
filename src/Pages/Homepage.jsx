import React from "react";
import Faq from "../Components/Faqs/Faq";
import MainSlider from "../Components/MainSlider/MainSLider";
import Gallery from "../Components/OurGallery/Gallery";
import Testi from "../Components/Testimonials/Testimonails";
import Events from "../Components/upcomingevents/Events";
import Donate from "../Containers/Donate/Donate";
import Help from "../Containers/HelpUs/Help";
import Volunteer from "../Containers/Volunteer/Volunteer";
import Welcome from "../Containers/Welcome/Welcome";

export default function Homepage() {
  return (
    <>
      <MainSlider />
      <Welcome />
      <Donate />
      <Volunteer />
      <Events />
      <Help />
      <Testi />
      <Gallery />
      {/* <Faq /> */}
    </>
  );
}
