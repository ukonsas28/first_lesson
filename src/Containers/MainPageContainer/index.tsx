import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import MainPage from "../../Components/MainPage";
import first_slide from "../../assets/image/first_slide.jpg";
import second_slide from "../../assets/image/second_slide.jpg";
import third_slide from "../../assets/image/third_slide.jpg";
import { getSliderDataAction } from "../../store/MainPage/actions";

const imageArr = [
  { id: 1, link: first_slide, description: "Красивая картинка с горами №1" },
  { id: 2, link: second_slide, description: "Красивая картинка с горами №2" },
  { id: 3, link: third_slide, description: "Красивая картинка с горами №23" },
];

const MainPageContainer = () => {
  const dispatch = useDispatch();

  const getData = () => {
    setTimeout(() => dispatch(getSliderDataAction(imageArr)), 300);
  };

  useEffect(getData, [dispatch]);

  const testAxios = async () => {
    const a = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(a);
  };

  useEffect(() => {
    testAxios();
  }, [dispatch]);

  return (
    <>
      <MainPage />
    </>
  );
};

export default MainPageContainer;
