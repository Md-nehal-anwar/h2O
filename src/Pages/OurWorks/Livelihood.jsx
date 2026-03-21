import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";


export default function Livelihood(){
    const text = {
        title : "Livelihood",
        subTitle : "Livelihood",
        navTitle : "Home/work",
        image: "../assests/Gallery/gallery9.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}