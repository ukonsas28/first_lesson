import React, { FC, useState } from "react";
import PasswordInput from "../../Common/Forms/PasswordInput";
import TextInput from "../../Common/Forms/TextInput";
import style from "./RegistrationForm.module.scss";

const RegistrationForm: FC = () => {
  const [login, setLogin] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [returnPassword, setReturnPassword] = useState<string>("");
  return (
    <>
      <div className={style["registration-form_wrapper"]}>
        <form className={style.form}>
          <h1>Регистрация</h1>
          <TextInput setLogin={setLogin} login={login} title="Login" />
          <TextInput setLogin={setEmail} login={email} title="Email" />
          <PasswordInput
            setPassword={setPassword}
            password={password}
            title="Password"
          />
          <PasswordInput
            setPassword={setReturnPassword}
            password={returnPassword}
            title="Return password"
          />

          <button
            type="button"
            className={style.btn}
            onClick={() => {
              console.log(
                { login, email, password, returnPassword },
                "Объект регистрации"
              );
              setLogin("");
              setEmail("");
              setPassword("");
              setReturnPassword("");
            }}>
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
