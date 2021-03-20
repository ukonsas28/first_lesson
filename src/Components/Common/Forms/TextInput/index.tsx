import React, { FC } from "react";
import style from "./TextInput.module.scss";

interface IProps {
  setLogin: any;
}

const TextInput: FC<IProps> = (props: IProps) => {
  const { setLogin } = props;
  return (
    <>
      <input
        className={style.input}
        type="text"
        onChange={(e) => setLogin(e.currentTarget.value)}
      />
    </>
  );
};

export default TextInput;
