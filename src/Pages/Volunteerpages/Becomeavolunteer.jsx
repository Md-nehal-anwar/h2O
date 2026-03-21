import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";


export default function BecomeAVolunteer(){
    const text = {
        title : "Become A Volunteer",
        subTitle : "Volunteer",
        navTitle : "Home/Volunteer",
        image: "../assests/Gallery/gallery9.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}