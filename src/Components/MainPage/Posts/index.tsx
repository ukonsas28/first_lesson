import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getPostData } from "../../../store/MainPage/selectors";
import { IPost } from "../../../store/MainPage/types";
import PostItem from "./PostItem";

const Posts: FC = () => {
  const posts = useSelector(getPostData);
  return (
    <>
      {posts.slice(0, 5).map((el: IPost) => (
        <PostItem postData={el} key={el.id} />
      ))}
    </>
  );
};

export default Posts;
