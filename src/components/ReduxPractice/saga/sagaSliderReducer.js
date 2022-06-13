import { HIDE_SLIDER_IMAGE, SHOW_SLIDER_IMAGE } from "../types/types";

const initialState = [];
export const sagaSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SLIDER_IMAGE:
      return action.payload;
    case HIDE_SLIDER_IMAGE:
      return (action.payload = []);
    default:
      return state;
  }
};
