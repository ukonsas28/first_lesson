import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testAction } from "../../../store/actions";
import { getName, getTest } from "../../../store/selectors";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./AuthForm.module.scss";

const AuthForm: FC = () => {
  const [authFormValue, setAuthFormValue] = useState<any>({
    login: "",
    password: "",
  });
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const test = useSelector(getTest);
  console.log(name, test);
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
              dispatch(testAction("TEEEEST"));
            }}>
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
