import FormInput from "../common/FormInput";
import GithubIcon from "../common/GithubIcon";
import GoogleIcon from "../common/GoogleIcon";
import FacebookIcon from "../common/FacebookIcon";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginInput">
      <div className="input-container">
        <p className="logo">Your logo</p>
        <p className="logo login">Login</p>
        <form>
          <FormInput name="Email" placeholder="username@gmail.com" />
          <FormInput name="Password" placeholder="Password" />
          <span className="forgetPassword">Forgot Password?</span>
          <button className="signInBtn">Sign In</button>
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
      </div>
      <div className="loginBanner"></div>
    </div>
  );
};

export default Login;
