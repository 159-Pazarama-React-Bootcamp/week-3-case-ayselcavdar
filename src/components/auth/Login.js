import { useState } from "react";
import FormInput from "../common/FormInput";
import GithubIcon from "../common/GithubIcon";
import GoogleIcon from "../common/GoogleIcon";
import FacebookIcon from "../common/FacebookIcon";
import "./Login.css";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { pathname } = useLocation()

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "username@gmail.com",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at list 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginInput">
      <div className="input-container">
        <p className="logo">Your logo</p>
        <p className="logo login">{pathname.includes('/register') ? "Register" : "Login"}</p>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <span className="forgetPassword">Forgot Password?</span>
          <button className="signInBtn">{pathname.includes('/register') ? "Sign Up" : "Sign in"}</button>
        </form>
        <p className="loginWith">or continue with</p>
        <div className="icon-container">
          <div className="icon-item">
            <GoogleIcon />
          </div>
          <div className="icon-item">
            <GithubIcon />
          </div>
          <div className="icon-item">
            <FacebookIcon />
          </div>
        </div>
        <div className="freeRegisterContainer">
          <p className="hasAccount">
            Don&apos;t have an account yet?
            <Link to={"/register"}>
              <span className="freeRegister">Register for free</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="loginBanner"></div>
    </div>
  );
};

export default Login;
