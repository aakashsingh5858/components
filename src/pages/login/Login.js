import React from "react";
import Background from "../../assets/images/logincover.png";
import "./login.css";
import Input from "../../components/input/Input";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/button/Button";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginBackGround">
        <img src={Background} className="backGround-img" />
      </div>
      <div className="box">
        <div className="fieldWrap">
          <div className="logoWrapper">
            <img src={Logo} width={80} />
            <h2 className="logoName">Components</h2>
          </div>
          <div className="inputSector">
            <Input label="email" placeholder="Enter email address..." />
          </div>
          <div className="inputSector">
            <Input label="password" placeholder="Enter password..." />
          </div>
          <div className="submitBtn">
            <Button className="large-button" value="Sign In" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
