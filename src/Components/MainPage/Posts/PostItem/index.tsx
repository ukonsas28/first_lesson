import React, { FC } from "react";
import { IPost } from "../../../../store/MainPage/types";
import style from "./PostItem.module.scss";

interface IProps {
  postData: IPost;
}

const PostItem: FC<IProps> = ({ postData }: IProps) => {
  const { title, body } = postData;
  console.log(postData.id);
  return (
    <>
      <div className={style.wrapper}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </>
  );
};

export default PostItem;
