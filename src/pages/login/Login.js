import React, { useState } from "react";
import Background from "../../assets/images/logincover.png";
import "./login.css";
import Input from "../../components/input/Input";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/Contstants";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../store/loader";
import cloneDeep from "lodash.clonedeep";

const Login = () => {
  const navigate = useNavigate(null);
  const dispatch = useDispatch(null);
  const [error, setError] = useState({});
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const handleTextChange = (e, key) => {
    let loginInputValue = cloneDeep(loginValue);
    loginInputValue[key] = e.target.value;
    setLoginValue(loginInputValue);
  };

  const handleSubmit = () => {
    if (validateField()) {
      dispatch(loadingAction(true));
      setTimeout(() => {
        if (
          loginValue.email === "components123@gmail.com" || loginValue.password === 123 ) {
          navigate(ROUTES.HOME);
          dispatch(loadingAction(false));
        }
      }, 500);
    }
  };

  const validateField = () => {
    let err = {};
    if (loginValue.email === "") {
      err.email = "Please Enter Email Address";
      err.inputError = true;
    }
    if (loginValue.password === "") {
      err.password = "Please Enter password Address";
      err.passwordError = true;
    }
    setError({ ...err });
    return Object.keys(err).length < 1;
  };
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
            <Input
              label="email"
              placeholder="Enter email address..."
              type="email"
              onChange={(e) => handleTextChange(e, "email")}
              style={{ border: error.inputError ? "1px solid red" : "" }}
            />
            <p className="loginInputError">{error.email}</p>
          </div>
          <div className="inputSector">
            <Input
              label="password"
              placeholder="Enter password..."
              type="password"
              onChange={(e) => handleTextChange(e, "password")}
              style={{ border: error.passwordError ? "1px solid red" : "" }}
            />
            <p className="loginInputError">{error.password}</p>
          </div>
          <div className="submitBtn">
            <Button
              className="large-button"
              value="Sign In"
              handleClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
