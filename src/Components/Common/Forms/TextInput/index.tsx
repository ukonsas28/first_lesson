import React, { FC } from "react";
import style from "./TextInput.module.scss";

interface IProps {
  setLogin: any;
  login: string;
  title: string;
}

const TextInput: FC<IProps> = (props: IProps) => {
  const { setLogin, login, title } = props;

  return (
    <>
      <div className={style.input_wrapper}>
        <span>{title}</span>
        <input
          className={style.input}
          type="text"
          onChange={(e) => setLogin(e.currentTarget.value)}
          value={login}
        />
      </div>
    </>
  );
};

export default TextInput;
