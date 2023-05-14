import React from "react";
import Header from "./Header.js";
import AuthPage from "./AuthPage.js";

const Login = ({
  clearFormValues,
  handleChange,
  handleSubmitAuth,
  formValues,
  setFormValues,
}) => {
  return (
    <>
      <Header
        title={"Регистрация"}
        link={"/sign-up"}
        setFormValues={setFormValues}
        clearFormValues={clearFormValues}
      />

      <AuthPage
        handleSubmit={handleSubmitAuth}
        handleChange={handleChange}
        formValues={formValues}
        title={"Вход"}
        buttonText={"Войти"}
      />
    </>
  );
};

export default Login;
