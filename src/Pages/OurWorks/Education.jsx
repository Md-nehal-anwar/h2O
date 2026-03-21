import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";


export default function Education(){
    const text = {
        title : "Eductaion",
        subTitle : "Education",
        navTitle : "Home/Work",
        image: "../assests/Gallery/gallery4.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}