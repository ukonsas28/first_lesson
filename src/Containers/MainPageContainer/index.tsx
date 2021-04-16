import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainPage from "../../Components/MainPage";
import network from "../../network";
import { getPostDataAction } from "../../store/MainPage/actions";

const MainPageContainer = () => {
  const dispatch = useDispatch();

  // const getData = () => {
  //   dispatch(getPostDataAction());
  // };
  const getData = () => {
    async function getPosts() {
      const data = await network.getRequest("posts");
      dispatch(getPostDataAction(data));
    }
    getPosts();
  };

  useEffect(getData, [dispatch]);

  return (
    <>
      <MainPage />
    </>
  );
};

export default MainPageContainer;
