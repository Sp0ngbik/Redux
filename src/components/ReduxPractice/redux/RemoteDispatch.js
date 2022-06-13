import { useDispatch, useSelector } from "react-redux";
import { REMOTE_DISPATCH } from "../types/types";

const RemoteDispatch = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    return state.filterElements;
  });
  const remoteDispatcher = useSelector((state) => {
    return state.remoteDispatch;
  });
  function loadFunc() {
    return dispatch({ type: REMOTE_DISPATCH, payload: posts });
  }
  return (
    <div>
      <button
        onClick={() => {
          loadFunc();
        }}
      >
        Check filter Value
      </button>
      <div>
        This is my remote 'Dispatcher', also filter value =
        {remoteDispatcher === "" ? "Empty" : remoteDispatcher}
      </div>
    </div>
  );
};

export default RemoteDispatch;
