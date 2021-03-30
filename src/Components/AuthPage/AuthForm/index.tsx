import React, { FC, useState } from "react";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./AuthForm.module.scss";

const AuthForm: FC = () => {
  const [authFormValue, setAuthFormValue] = useState<any>({
    login: "",
    password: "",
  });

  return (
    <>
      <div className={style["auth-form_wrapper"]}>
        <form className={style.form}>
          <h1>Авторизация</h1>

          <TextInput
            formValue={authFormValue}
            setFormValue={setAuthFormValue}
            formKey="login"
            title="Login"
          />
          <PasswordInput
            formValue={authFormValue}
            setFormValue={setAuthFormValue}
            formKey="password"
            title="Password"
          />

          <button
            type="button"
            className={style.btn}
            onClick={() => {
              setAuthFormValue({ login: "", password: "" });
            }}>
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
