import React, { FC } from "react";
import style from "./PostItem.module.scss";

interface IProps {
  postData: any;
}
const Posts: FC<IProps> = ({ postData }: IProps) => {
  const { title, body } = postData;
  return (
    <>
      <div className={style.wrapper}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </>
  );
};

export default Posts;
