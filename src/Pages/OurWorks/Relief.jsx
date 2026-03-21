import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";


export default function Relief(){
    const text = {
        title : "Relief",
        subTitle : "Relief",
        navTitle : "Home/Work",
        image: "../assests/Gallery/gallery2.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}