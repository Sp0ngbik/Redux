import { REMOTE_DISPATCH } from "../types/types";

const initialState = [];

export function remoteDispatch(state = initialState, action) {
  switch (action.type) {
    case REMOTE_DISPATCH:
      return [action.payload];
    default:
      return state;
  }
}

export default remoteDispatch;
