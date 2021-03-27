import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import AuthForm from "./AuthForm";
import PageWrapper from "../Common/PageWrapper";

const AuthPage: FC = () => {
  const history = useHistory();
  return (
    <>
      <PageWrapper>
        <button
          type="button"
          onClick={() => {
            history.push("/registration");
          }}>
          GO REGISTRATION
        </button>
        {/* <AuthForm /> */}
      </PageWrapper>
    </>
  );
};

export default AuthPage;
