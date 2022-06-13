import { AXIOS_ADD } from "../types/types";

const initialState = [];
export const axiosRequest = (state = initialState, action) => {
  switch (action.type) {
    case AXIOS_ADD:
      return action.payload;
    default:
      return state;
  }
};
