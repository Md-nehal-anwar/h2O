import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";


export default function Campaign(){
    const text = {
        title : "Campaign",
        subTitle : "Campaign",
        navTitle : "Home/JoinUs",
        image: "../assests/Gallery/gallery4.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}