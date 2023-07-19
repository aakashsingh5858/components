import React from "react";
import Background from "../../assets/logincover.png";
import "./login.css";
import Input from "../../components/input/Input";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginBackGround">
        <img src={Background} className="backGround-img" />
      </div>
      <div className="formFieldWrap">
        <form>
          <div className="inputSector">
            <Input />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
