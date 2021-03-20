import React, { FC } from "react";
import style from "./PasswordInput.module.scss";

interface IProps {
  setPassword: any;
}

const PasswordInput: FC<IProps> = (props: IProps) => {
  const { setPassword } = props;
  return (
    <>
      <input
        className={style.input}
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
    </>
  );
};

export default PasswordInput;
