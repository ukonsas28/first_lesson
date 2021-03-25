import React, { FC } from "react";
import style from "./PasswordInput.module.scss";

interface IProps {
  setPassword: any;
  password: string;
  title: string;
}

const PasswordInput: FC<IProps> = (props: IProps) => {
  const { setPassword, password, title } = props;
  return (
    <>
      <div className={style.input_wrapper}>
        <span>{title}</span>
        <input
          className={style.input}
          type="password"
          onChange={(e) => setPassword(e.currentTarget.value)}
          value={password}
        />
      </div>
    </>
  );
};

export default PasswordInput;
