import React, { useState } from "react";
import style from "./Slider.module.scss";
import first_slide from "../../../assets/image/first_slide.jpg";
import second_slide from "../../../assets/image/second_slide.jpg";
import third_slide from "../../../assets/image/third_slide.jpg";
import SliderItem from "./SliderItem";
import SliderButton from "./SliderButton";

const imageArr = [
  { id: 1, link: first_slide, description: "Красивая картинка с горами №1" },
  { id: 2, link: second_slide, description: "Красивая картинка с горами №2" },
  { id: 3, link: third_slide, description: "Красивая картинка с горами №23" },
];
const Slider = () => {
  const [sliderData, setSliderData] = useState({ currentImage: 0 });

  const prevImage = () => {
    const { currentImage } = sliderData;
    if (currentImage === 0) {
      setSliderData({ currentImage: imageArr.length - 1 });
    } else {
      setSliderData({ currentImage: currentImage - 1 });
    }
  };

  const nextImage = () => {
    const { currentImage } = sliderData;
    if (currentImage === imageArr.length - 1) {
      setSliderData({ currentImage: 0 });
    } else {
      setSliderData({ currentImage: currentImage + 1 });
    }
  };

  const { currentImage } = sliderData;
  return (
    <>
      <div className={style.slider_wrapper}>
        <SliderButton handler={prevImage} description="prev" />
        <SliderItem
          link={imageArr[currentImage].link}
          description={imageArr[currentImage].description}
        />
        <SliderButton handler={nextImage} description="next" />
      </div>
    </>
  );
};

export default Slider;
