import React from "react";
import "./hconatiner.css";

export default function Hcontainer(props){
    return(
        <section className="h_cont" style={{ backgroundImage: `url(${props.image})` }}>  
        <div className="about_name">
        <span className="about_nav">{props.navTitle} / <strong className="about_nav_strong">{props.subTitle}</strong> </span>
        <h2 className="about_nav_name">{props.title}</h2>
        </div>
        <div className="h_overlay"></div>
         </section>
    )
}