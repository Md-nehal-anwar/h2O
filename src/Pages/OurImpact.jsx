import React from "react";
import Hcontainer from "../Components/container/Hcontainer";


export default function Impact(){
    const text = {
        title : "Our Impact",
        subTitle : "Our Impact",
        navTitle : "Home",
        image: "./assests/Gallery/gallery5.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}