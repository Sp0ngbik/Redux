import axios from "axios";
import {
  ADD_ELEMENT,
  ASYNC_SAGA_DECREMENT,
  ASYNC_SAGA_INCREMENT,
  ASYNC_SAGA_SLIDER,
  ASYNC_SAGA_USERS,
  AXIOS_ADD,
  FILTER_ELEMENTS,
  HIDE_SLIDER_IMAGE,
  LOADER_DIACTIVE,
  REDUX_PRACTICE,
  SAGA_DECREMENT,
  SAGA_INCREMENT,
  SAGA_SLIDER_DECREMENT,
  SAGA_SLIDER_INCREMENT,
  SAGA_USERS,
  SHOW_SLIDER_IMAGE,
} from "../types/types";

export function onAddElement(payload) {
  return { type: ADD_ELEMENT, payload: payload };
}

export function onFilterElements(filterValue) {
  return {
    type: FILTER_ELEMENTS,
    payload: filterValue,
  };
}

export function asyncPosts() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const dataTabs = await response.data;
      dispatch({ type: AXIOS_ADD, payload: dataTabs });
      dispatch(turnOffLoading());
    } catch (e) {
      alert("Something wrong");
    }
  };
}

export function turnOffLoading() {
  return {
    type: LOADER_DIACTIVE,
  };
}

export function asyncIncrementAction() {
  return { type: ASYNC_SAGA_INCREMENT };
}

export function incrementAction() {
  return {
    type: SAGA_INCREMENT,
  };
}

export function decrementAction() {
  return {
    type: SAGA_DECREMENT,
  };
}
export function asyncDecrementAction() {
  return { type: ASYNC_SAGA_DECREMENT };
}

export function getSagaUsers(payload) {
  return { type: SAGA_USERS, payload };
}

export function asyncGetSagaUsers() {
  return { type: ASYNC_SAGA_USERS };
}

export function showSliderAction() {
  return { type: ASYNC_SAGA_SLIDER };
}

export function sliderAction(payload) {
  return { type: SHOW_SLIDER_IMAGE, payload };
}
export function hideSliderAction() {
  return { type: HIDE_SLIDER_IMAGE };
}

export function sliderIncrement() {
  return { type: SAGA_SLIDER_INCREMENT };
}
export function sliderDecrement() {
  return { type: SAGA_SLIDER_DECREMENT };
}

export function checkKnowledge() {
  return { type: REDUX_PRACTICE, payload: "check - confirmed" };
}
