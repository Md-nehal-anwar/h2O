import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";


export default function Health(){
    const text = {
        title : "Health",
        subTitle : "Health",
        navTitle : "Home/Work",
        image: "../assests/Gallery/gallery9.jpg",
      }

    return(
        <>
<Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image = {text.image}/>
</>
    )
}