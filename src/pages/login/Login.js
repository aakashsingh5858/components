import React from "react";
import Background from "../../assets/images/logincover.png";
import "./login.css";
import Input from "../../components/input/Input";
import Logo from "../../assets/images/logo.png";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/Contstants";
import { useDispatch } from "react-redux";
import { loadingAction } from "../../store/loader";

const Login = () => {
  const navigate = useNavigate(null);
  const dispatch = useDispatch(null);
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
            />
          </div>
          <div className="inputSector">
            <Input
              label="password"
              placeholder="Enter password..."
              type="password"
            />
          </div>
          <div className="submitBtn">
            <Button
              className="large-button"
              value="Sign In"
              handleClick={() => {
                dispatch(loadingAction(true));
                setTimeout(() => {
                  navigate(ROUTES.HOME);
                  dispatch(loadingAction(false));
                }, 800);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
