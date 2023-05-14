import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import AuthPage from "./AuthPage.js";

const Register = ({
  handleChange,
  handleSubmitRegister,
  formValues,
  clearFormValues,
}) => {
  return (
    <>
      <Header
        title={"Войти"}
        link={"/sign-in"}
        clearFormValues={clearFormValues}
      />

      <AuthPage
        handleSubmit={handleSubmitRegister}
        handleChange={handleChange}
        formValues={formValues}
        title={"Регистрация"}
        buttonText={"Зарегистрироваться"}
      >
        <Link onClick={clearFormValues} to="/sign-in" className="auth__link">
          Уже зарегистрированы? Войти
        </Link>
      </AuthPage>
    </>
  );
};

export default Register;
