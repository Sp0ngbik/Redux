import { SAGA_USERS } from "../types/types";

const initialState = [];

export const sagaUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAGA_USERS:
      return action.payload;
    default:
      return state;
  }
};
