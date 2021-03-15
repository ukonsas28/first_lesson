import React from "react";
import style from "./Slider.module.scss";
import first_slide from "../../../assets/image/first_slide.jpg";
import second_slide from "../../../assets/image/second_slide.jpg";
import third_slide from "../../../assets/image/third_slide.jpg";
import SliderItem from "./SliderItem";

interface IState {
  currentImage: number;
}
const imageArr = [
  { id: 1, link: first_slide, description: "Красивая картинка с горами №1" },
  { id: 2, link: second_slide, description: "Красивая картинка с горами №2" },
  { id: 3, link: third_slide, description: "Красивая картинка с горами №23" },
];
class Slider extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { currentImage: 0 };
  }

  render() {
    const { currentImage } = this.state;
    return (
      <>
        <div className={style.slider_wrapper}>
          <SliderItem
            link={imageArr[currentImage].link}
            description={imageArr[currentImage].description}
          />
        </div>
      </>
    );
  }
}

export default Slider;
