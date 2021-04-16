import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getPostData } from "../../../store/MainPage/selectors";
import PostItem from "./PostItem";

const Posts: FC = () => {
  const postData = useSelector(getPostData);

  return (
    <>
      {postData.slice(0, 10).map((el: any) => {
        return <PostItem postData={el} key={el.id} />;
      })}
    </>
  );
};

export default Posts;
