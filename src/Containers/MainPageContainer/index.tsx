import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainPage from "../../Components/MainPage";
import { fetchCharactersDataAction } from "../../store/MainPage/actions";

const MainPageContainer = () => {
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(fetchCharactersDataAction());
  };

  useEffect(getData, [dispatch]);

  return (
    <>
      <MainPage />
    </>
  );
};

export default MainPageContainer;
