import { all } from "redux-saga/effects";
import { sagaWatcher, sliderWatcher, userWatcher } from "../saga/sagaCounter";
//по сути комбинатор watcher'ов
function* rootWatcher() {
  yield all([sagaWatcher(), userWatcher(), sliderWatcher()]);
}

export default rootWatcher;
