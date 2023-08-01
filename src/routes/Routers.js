import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./Contstants";
import Loader from "../components/loader/Loader";

const Login = lazy(() => import("../pages/login/Login"));
const Home = lazy(() => import("../pages/home/Home"));
const RecipeBookingApp = lazy(() =>
  import("../pages/book-app/RecipeBookingApp")
);

const Routers = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path={ROUTES.LOGIN} element={<Login />} />
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.BOOK_APP} element={<RecipeBookingApp />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
