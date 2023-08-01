import { put, takeEvery } from "redux-saga/effects";
import { RECIPE_BOOK_LIST, SET_RECIPE_BOOK_LIST } from "./ReduxConstants";
import axios from "axios";
import store from "./store/index";
import { activeLoader } from "./action/loaderAction";

const options = {
  method: "GET",
  url: "https://pizza-and-desserts.p.rapidapi.com/pizzas/1",
  headers: {
    "X-RapidAPI-Key": "cbaf900aefmsh2b3b5742aec832ap134af6jsn110ff5c4b7bc",
    "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
  },
};

const baseUrl = "https://pizza-and-desserts.p.rapidapi.com/pizzas";

function* getRecipeData() {
  console.log("call api");
  store.dispatch(activeLoader(true));
  try {
    let res = yield axios.request(baseUrl, options);
    console.log(res, "res");
    if (res.status === 200) {
      store.dispatch(activeLoader(false));
      yield put({ type: SET_RECIPE_BOOK_LIST, data: res.data });
    }
  } catch (err) {
    return err.response;
  }
}

function* getRecipeBookData() {
  yield takeEvery(RECIPE_BOOK_LIST, getRecipeData);
}

export default getRecipeBookData;
