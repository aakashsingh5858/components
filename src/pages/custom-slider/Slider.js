import React, { useEffect, useRef, useState } from "react";
import "./slider.css";
import { FcNext, FcPrevious } from "react-icons/fc";
import Toggle from "../../components/toggle-button/Toggle";

const Slider = () => {
  const clickNext_ref = useRef(null);
  const clickPrev_ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(null);
  const images = [
    {
      img: "https://picsum.photos/id/255/600/400",
    },
    {
      img: "https://picsum.photos/id/250/600/400",
    },
    {
      img: "https://picsum.photos/id/260/600/400",
    },
    {
      img: "https://picsum.photos/id/240/600/400",
    },
    {
      img: "https://picsum.photos/id/236/600/400",
    },
    {
      img: "https://picsum.photos/id/270/600/400",
    },
    {
      img: "https://picsum.photos/id/271/600/400",
    },
    {
      img: "https://picsum.photos/id/273/600/400",
    },
    {
      img: "https://picsum.photos/id/290/600/400",
    },
    {
      img: "https://picsum.photos/id/280/600/400",
    },
  ];
  useEffect(() => {
    const sildes = document.querySelectorAll(".silder-image");
    let counter = 0;
    sildes.forEach((silde, index) => {
      silde.style.left = `${index * 100}%`;
    });

    const sildeImage = () => {
      sildes.forEach((silde, index) => {
        silde.style.transform = `translateX(-${counter * 100}%)`;
      });
    };
    const prev = () => {
      if (counter < 0) {
        counter = 0;
      } else {
        counter--;
        sildeImage();
      }
    };
    const next = () => {
      if (counter === sildes.length - 1) {
        counter = sildes.length - 1;
      } else {
        counter++;
        sildeImage();
      }
    };
    clickNext_ref.current = next;
    clickPrev_ref.current = prev;
    const handleAutoSlide = () => {
      setInterval(() => {
        if (counter === sildes.length) {
          counter = 0;
        } else {
          sildeImage();
          counter++;
        }
      }, 2000);
    };
    if (activeSlide) {
      handleAutoSlide();
    }
  }, [activeSlide]);

  return (
    <>
      <div className="sliderMain">
        <div className="autoSlideActiveBlock">
          {!activeSlide && (
            <>
              <h3>Auto Slide </h3>
              <Toggle onChange={(checked) => setActiveSlide(checked)} />
            </>
          )}
        </div>
        <div className="sileder-imageWrap">
          {images.map((item, index) => {
            return <img src={item.img} className="silder-image" key={index} />;
          })}
          {!activeSlide && (
            <>
              <FcPrevious
                size="1.5rem"
                style={{
                  position: "absolute",
                  left: "0px",
                  top: "50%",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  padding: ".4rem",
                  cursor: "pointer",
                }}
                onClick={() => clickPrev_ref.current()}
              />
              <FcNext
                size="1.5rem"
                style={{
                  position: "absolute",
                  right: "0px",
                  top: "50%",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  padding: ".4rem",
                  cursor: "pointer",
                }}
                onClick={() => clickNext_ref.current()}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Slider;
