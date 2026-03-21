import React from "react";
import "./form.css"

export default function Form (){
    return(
        <section className="form">
            <div className="form_container">
            <p className="sub_heading_middle ">Contact With Us</p>
            <h3 className="heading_center heading_width">Feel free to write us anytime</h3>
            
            <form action="" className="contact_form">
                <div className="table">
                    <div className="tr">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your E-mail" />
                </div>
                <div className="tr">
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Subject" />
                </div>

                <textarea name="" id="" cols="80" rows="05" placeholder="Write a Message"></textarea>
                <input type="submit" className="btn-primary_dark"/>
                </div>
            </form>
            </div>
        </section>
    )
}