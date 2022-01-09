import { useState } from "react";
import FormInput from "../common/FormInput";
import GithubIcon from "../common/GithubIcon";
import GoogleIcon from "../common/GoogleIcon";
import FacebookIcon from "../common/FacebookIcon";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  signin,
  signup,
  useAuth,
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
} from "../../firebase";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // custom hook ile sisteme kayıtlı ya da login olmuş kullanıcı alıyoruz
  const currUser = useAuth();

  // history başarılı şekilde login veya register işlemi sonrası,
  // kullanıcıyı gerekli sayfalara yönlendirmemiz için
  const history = useNavigate();

  // anlık url'i kontrol edip login veya register durumuna göre başlık buton vb
  // değişiklikleri anlık yansıtacağımız objeye ulaşıyoruz
  const { pathname } = useLocation();

  // input field propertileri
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

  // email ve password ile yapılan register işleminden sorumlu handler
  const handleSigup = async () => {
    try {
      setLoading(true);
      await signup(values.email, values.password);
      history("/login");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };
  
  // email ve password ile yapılan login işleminden sorumlu handler
  const handleSigin = async () => {
    try {
      setLoading(true);
      await signin(values.email, values.password);
      history("/");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  // social signup handlers
  const handleGoogleSignup = async () => {
    try {
      const response = await signInWithGoogle();
      response && history("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      const response = await signInWithFacebook();
      response && history("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGithubSignup = async () => {
    try {
      const response = await signInWithGithub();
      response && history("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pathname.includes("/login") ? handleSigin() : handleSigup();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginInput">
      <div className="input-container">
        <p className="logo">
          {currUser && pathname.includes("/login")
            ? "You registered as " + currUser?.email
            : "Your logo"}
        </p>
        <p className="logo login">
          {pathname.includes("/register") ? "Register" : "Login"}
        </p>
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
          <button
            disabled={(loading || currUser) && pathname.includes("/register")}
            className="signInBtn"
            type="submit"
            style={{
              cursor:
                (loading || currUser) &&
                pathname.includes("/register") &&
                "not-allowed ",
            }}
            title={
              (loading || currUser) && pathname.includes("/register")
                ? "You already logged in"
                : ""
            }
          >
            {pathname.includes("/register") ? "Sign Up" : "Sign in"}
          </button>
        </form>
        <p className="loginWith">or continue with</p>
        <div className="icon-container">
          <div className="icon-item" onClick={handleGoogleSignup}>
            <GoogleIcon />
          </div>
          <div className="icon-item" onClick={handleGithubSignup}>
            <GithubIcon />
          </div>
          <div className="icon-item" onClick={handleFacebookSignup}>
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
