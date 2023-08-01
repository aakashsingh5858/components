import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import createSagaMiddleware from "redux-saga";
import getRecipeBookData from "../services";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(getRecipeBookData);

export default store;
