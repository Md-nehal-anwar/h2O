import React from 'react'
import Hcontainer from '../Components/container/Hcontainer';
import Donate from '../Containers/Donate/Donate';

export default function Causes(){
    const text = {
        title: "Our Causes",
        subTitle: "Causes",
        navTitle: "Home",
        image: "./assests/Gallery/gallery5.jpg",
      };
    return(
        <>
        <Hcontainer title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image ={text.image} />
        <Donate />
        </>
    )
}