import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";


export default function Individual(){
    const text = {
        title : "Individual",
        subTitle : "Individual",
        navTitle : "Home/JoinUs",
        image: "../assests/Gallery/gallery4.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}