import { SAGA_DECREMENT, SAGA_INCREMENT } from "../types/types";

const initialState = 0;
export const sagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_INCREMENT:
      return (state += 1);
    case SAGA_DECREMENT:
      return (state -= 1);
    default:
      return state;
  }
};
