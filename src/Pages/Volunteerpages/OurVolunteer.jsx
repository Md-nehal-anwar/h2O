import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";


export default function OurVolunteers(){
    const text = {
        title : "Our Volunteers",
        subTitle : "Volunteers",
        navTitle : "Home/Volunteer",
        image: "../assests/Gallery/gallery9.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}