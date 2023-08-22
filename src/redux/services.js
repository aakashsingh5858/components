import { put, takeEvery } from "redux-saga/effects";
import {
  GET_SEARCH_IMAGE,
  RECIPE_BOOK_LIST,
  SEARCH_IMAGE,
  SET_RECIPE_BOOK_LIST,
} from "./ReduxConstants";
import axios from "axios";
import store from "./store/index";
import { activeLoader } from "./action/loaderAction";

const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

function* getRecipeData() {
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

function* getSearchData(inputData) {
  store.dispatch(activeLoader(true));
  try {
    let res = yield axios.get(
      `https://api.unsplash.com/search/photos?page=${inputData?.payload?.page}&query=${inputData?.payload?.getInputValue}&client_id=${accessKey}`
    );
    if (res.status === 200) {
      store.dispatch(activeLoader(false));
      yield put({ type: GET_SEARCH_IMAGE, data: res?.data?.results });
    }
  } catch (err) {
    return err.response;
  }
}

function* getRecipeBookData() {
  yield takeEvery(RECIPE_BOOK_LIST, getRecipeData);
  yield takeEvery(SEARCH_IMAGE, getSearchData);
}

export default getRecipeBookData;
