import { FILTER_ELEMENTS } from "../types/types";

const initialState = "";

export const filterElements = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ELEMENTS:
      return action.payload;
    default:
      return state;
  }
};
