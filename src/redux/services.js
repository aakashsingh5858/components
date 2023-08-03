import { put, takeEvery } from "redux-saga/effects";
import { RECIPE_BOOK_LIST, SET_RECIPE_BOOK_LIST } from "./ReduxConstants";
import axios from "axios";
import store from "./store/index";
import { activeLoader } from "./action/loaderAction";

const API_KEY = "275d58779ccf4e22af03e792e8819fff";

function* getRecipeData() {
  console.log("call api");
  store.dispatch(activeLoader(true));
  try {
    let res = yield axios.get(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );
    if (res.status === 200) {
      store.dispatch(activeLoader(false));
      yield put({ type: SET_RECIPE_BOOK_LIST, data: res?.data?.recipes });
    }
  } catch (err) {
    return err.response;
  }
}

function* getRecipeBookData() {
  yield takeEvery(RECIPE_BOOK_LIST, getRecipeData);
}

export default getRecipeBookData;
