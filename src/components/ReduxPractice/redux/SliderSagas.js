import { useDispatch, useSelector } from "react-redux";
import {
  hideSliderAction,
  showSliderAction,
  sliderDecrement,
  sliderIncrement,
} from "../actions/actions";

const SliderSagas = () => {
  const dispatch = useDispatch();
  const onNextSlider = () => {
    dispatch(sliderIncrement());
  };
  const onPrevSlider = () => {
    dispatch(sliderDecrement());
  };
  const onShowSlider = () => {
    dispatch(showSliderAction());
  };
  const onHideSlider = () => {
    dispatch(hideSliderAction());
  };
  const sliderState = useSelector((state) => {
    return state.sagaSliderReducer;
  });
  const sliderCounter = useSelector((state) => {
    return state.sagaSliderCounter;
  });

  return (
    <div>
      <div>
        {sliderState.length >= 1 ? (
          sliderState.length <= sliderCounter || sliderCounter < 0 ? (
            <div>
              <button
                onClick={() => {
                  onNextSlider();
                }}
              >
                Next
              </button>
              <button
                onClick={() => {
                  onPrevSlider();
                }}
              >
                Prev
              </button>
              <div>Dont have so much images:D</div>
            </div>
          ) : (
            <div>
              <div>
                <button
                  onClick={() => {
                    onNextSlider();
                  }}
                >
                  Next
                </button>
                <button
                  onClick={() => {
                    onPrevSlider();
                  }}
                >
                  Prev
                </button>
              </div>
              <img alt={"sadas"} src={sliderState[sliderCounter]} />
            </div>
          )
        ) : null}
      </div>
      <button
        onClick={() => {
          onShowSlider();
        }}
      >
        Show slider image
      </button>
      <button
        onClick={() => {
          onHideSlider();
        }}
      >
        Hide slider image
      </button>
    </div>
  );
};

export default SliderSagas;
