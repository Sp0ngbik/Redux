import { REDUX_PRACTICE } from "../types/types";

const initialState = [];
export const knowledgeCheck = (state = initialState, action) => {
  switch (action.type) {
    case REDUX_PRACTICE:
      return action.payload;
    default:
      return state;
  }
};
