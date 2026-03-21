import React from "react";
import Hcontainer from "../Components/container/Hcontainer";


export default function Team(){
    const text = {
        title : "Our Team",
        subTitle : "Team",
        navTitle : "Home",
        image: "./assests/Gallery/gallery6.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}