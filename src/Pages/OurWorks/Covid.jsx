import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";


export default function Covid(){
    const text = {
        title : "Covid",
        subTitle : "Covid",
        navTitle : "Home/Work",
        image: "../assests/Gallery/gallery2.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}