import React, { useEffect, useRef } from "react";
import "./gallery.css";
import { GalleryData } from "./gallerydata";

export default function Gallery() {
  const time = 2000;
  const autoplay = "true";
  let CardInterval;
  const galleryCon = useRef();
  const galleryCard = useRef();

  function GalleryChange() {
    galleryCon.current.scrollLeft += galleryCard.current.offsetWidth + 15;
    if (
      Math.floor(
        galleryCon.current.scrollWidth - galleryCon.current.scrollLeft
      ) <= galleryCon.current.offsetWidth
    ) {
      galleryCon.current.scrollLeft = 0;
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function autoGalleryChange() {
    CardInterval = setInterval(GalleryChange, time);
  }
  function OnHover() {
    clearInterval(CardInterval);
  }

  useEffect(() => {
    if (autoplay) {
      autoGalleryChange();
    }
    return () => clearInterval(CardInterval);
  }, [autoGalleryChange, CardInterval]);
  return (
    <section className="gallery">
      <h3 className="gallery_title"> Our Photo Gallery</h3>
      <div
        className="gallery_card_container"
        ref={galleryCon}
        onMouseEnter={() => OnHover()}
        onMouseLeave={() => autoGalleryChange()}
      >
        {GalleryData.map((item) => {
          return (
            <div
              className="gallery_card"
              style={{ backgroundImage: `url(${item.image})` }}
              ref={galleryCard}
              key={item.id}
            >
              <div className="gallery_card_overlay">
                <span className="gallery_subtitle">{item.purpose}</span>
                <h3 className="gallery_overlay_title">{item.event}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
