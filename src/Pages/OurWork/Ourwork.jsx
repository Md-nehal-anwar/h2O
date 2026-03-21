import React from "react";
import Hcontainer from "../../Components/container/Hcontainer";
import styles from "./ourWork.module.css";
import { ourWork } from "./OurWorkData";

export default function Work() {
  const text = {
    title: "Our Work",
    subTitle: "Our Work",
    navTitle: "Home",
    image: "./assests/Gallery/gallery7.jpg",
  };

  return (
    <>
      <Hcontainer
        title={text.title}
        subTitle={text.subTitle}
        navTitle={text.navTitle}
        image={text.image}
      />
      <div className={styles.ourWorkContainer}>
        {ourWork.map((item) => {
          return (
            <div className={styles.ourWorkBox}>
              <div className={styles.imgBox}>
                <img src={item.workBannerPhoto} alt="" />
              </div>

              <div className={styles.contentBox}>
                <h3 className="title">{item.title}</h3>
                <span className={styles.normal}>{item.tagline}</span>

                <p className={styles.description}>{item.description}</p>
                <button className={styles.btn}>Know More</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
