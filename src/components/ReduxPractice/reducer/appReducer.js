import { LOADER_ACTIVE, LOADER_DIACTIVE } from "../types/types";

const initialState = {
  isLoaded: true,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DIACTIVE:
      return { ...state, isLoaded: false };
    case LOADER_ACTIVE:
      return { ...state, isLoaded: true };
    default:
      return state;
  }
};
