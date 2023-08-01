import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
// import createSagaMiddleware from "redux-saga";
// import { getRecipeBook } from "../services";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  // middleware: () => [sagaMiddleware],
});
// sagaMiddleware.run(getRecipeBook);

export default store;
