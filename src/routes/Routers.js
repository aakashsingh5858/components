import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./Contstants";
import Loader from "../components/loader/Loader";

const Login = lazy(() => import("../pages/login/Login"));
const Home = lazy(() => import("../pages/home/Home"));
const RecipeBookingApp = lazy(() =>
  import("../pages/recipe-book-app/RecipeBookingApp")
);
const SearchImage = lazy(() => import("../pages/image-search-app/SearchImage"));
const Slider = lazy(() => import("../pages/custom-slider/Slider"));
const TodoNotes = lazy(() => import("../components/todo-notes/TodoNotes"));

const Routers = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path={ROUTES.LOGIN} element={<Login />} />
        <Route exact path={ROUTES.HOME} element={<Home />} />
        <Route exact path={ROUTES.BOOK_APP} element={<RecipeBookingApp />} />
        <Route exact path={ROUTES.SEARCH_IMAGE} element={<SearchImage />} />
        <Route exact path={ROUTES.SLIDE} element={<Slider />} />
        <Route exact path={ROUTES.TODO_NOTES} element={<TodoNotes />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
