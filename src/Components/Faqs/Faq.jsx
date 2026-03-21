import React, { useContext, useState } from "react";
import "./faq.css";
import { FaqData } from "./faqdata";
import { AppContext} from "../../Helper/Context";

export default function Faq() {
  // eslint-disable-next-line no-unused-vars
  const {page , setPage} = useContext(AppContext)
  const [show, setShow] = useState(true);
  function toggle(i) {
    if (show === i) {
      return setShow(null);
    }
    setShow(i);
  }
  return (
    <section className={page === 2 ? "Faq Faq_margin" : "Faq"}>
      <div className="faq_box_1"></div>
      <div className="faq_conatiner">
        <div className="faq_box_01">
          <div className="sub_heading_left">Recently asked questions</div>
          <h3 className="heading_left_main">
            People are frequently asking some questions from us{" "}
          </h3>
          <p className="description_black_grey">
            Proactively procrastinate cross-platform results via extensive ideas
            distinctively underwhelm enterprise. Compellingly plagiarize
            value-added sources with inexpensive schemas.
          </p>
          <button className="btn-primary_dark">Learn How To Help</button>
        </div>
        <div className="faq_box_02">
          {FaqData.map((item, i) => {
            return (
              <div className="q-a" key={item.id} {...item}>
                <h3
                  className={
                    i === show
                      ? "q_a_heading q_a_heading_colored"
                      : "q_a_heading"
                  }
                >
                  {item.question}{" "}
                  <div
                    className={
                      i === show ? "q_a_icon q_a_icon_color" : "q_a_icon"
                    }
                    onClick={() => toggle(i)}
                  >
                    {" "}
                    {show === i ? (
                      <span className="minus">{item.minus}</span>
                    ) : (
                      <span className="plus">{item.plus}</span>
                    )}
                  </div>
                </h3>
                {i === show ? <p className="q_a_answer">{item.answer}</p> : ""}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
