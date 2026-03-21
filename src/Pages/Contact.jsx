import React from "react";
import Form from "../Components/Contactform/form";
import Hcontainer from "../Components/container/Hcontainer";

export default function Contact() {
  const text = {
    title: "Contact us",
    subTitle: "Contact",
    navTitle: "Home",
    image: "./assests/Gallery/gallery4.jpg",
  };
  return (
    <>
      <Hcontainer  title = {text.title} subTitle = {text.subTitle} navTitle = {text.navTitle} image ={text.image}/>
      <Form />
    </>
  );
}
