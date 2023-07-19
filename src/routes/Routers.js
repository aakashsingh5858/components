import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./Contstants";
import Loader from "../components/loader/Loader";

const Login = lazy(() => import("../pages/login/Login"));

const Routers = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
