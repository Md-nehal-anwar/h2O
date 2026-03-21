import React from 'react';
import Hcontainer from '../Components/container/Hcontainer';
import Faq from '../Components/Faqs/Faq';
import Teams from '../Components/Teams/Teams';
import Events from '../Components/upcomingevents/Events';
import AboutNGO from '../Containers/Knowhumanhood/AboutNGO';
import Volunteer from '../Containers/Volunteer/Volunteer';





export default function About(){
  const text = {
    title : "About us",
    subTitle : "About",
    navTitle : "Home",
    image: "./assests/Gallery/gallery3.jpg",
  }
    return(
      <>
      <Hcontainer  title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
      <AboutNGO />
      {/* <Testi /> */}
      <Volunteer/>
      <Events />
      <Teams />
      <Faq />
      </>
    )

}