import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainPage from "../../Components/MainPage";
import { getPostDataAction } from "../../store/MainPage/actions";

const MainPageContainer = () => {
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getPostDataAction());
  };

  useEffect(getData, [dispatch]);

  return (
    <>
      <MainPage />
    </>
  );
};

export default MainPageContainer;
