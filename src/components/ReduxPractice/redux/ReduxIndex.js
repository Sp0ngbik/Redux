import { Component } from "react";
import { connect } from "react-redux";
import {
  asyncDecrementAction,
  asyncGetSagaUsers,
  asyncIncrementAction,
  checkKnowledge,
  onAddElement,
  onFilterElements,
} from "../actions/actions";
import AxiosPost from "./AxiosPost";
import RemoteDispatch from "./RemoteDispatch";
import style from "../style.module.scss";
import SliderSagas from "./SliderSagas";
class ReduxIndex extends Component {
  addElement() {
    if (this.addElementInput.value.trim() === "") {
      alert("You can't add empty string");
    } else {
      this.props.onAddElement(this.addElementInput.value);
      this.addElementInput.value = "";
    }
  }
  filterElement() {
    this.props.onFilterElements(this.filterElementInput.value);
  }

  render() {
    return (
      <div className={style.reduxContainer}>
        <div>
          <input type="text" ref={(input) => (this.addElementInput = input)} />
          <button onClick={this.addElement.bind(this)}>Add element</button>
        </div>
        <div>
          <input
            type="text"
            ref={(input) => (this.filterElementInput = input)}
          />
          <button onClick={this.filterElement.bind(this)}>
            Filter elements
          </button>
        </div>
        <div>
          <ul>
            {this.props.elements.map((el, index) => {
              return <li key={index}>{el.inputValue}</li>;
            })}
          </ul>
        </div>
        <div>
          <RemoteDispatch />
          <AxiosPost />
        </div>
        <div>
          <button
            onClick={() => {
              this.props.onIncrementElement();
            }}
          >
            Increment++
          </button>
          <button
            onClick={() => {
              this.props.onDecrementElement();
            }}
          >
            Dicrement--
          </button>
          <div>{this.props.sagaReducer}</div>
          <div>
            <button
              onClick={() => {
                this.props.onSagaUsers();
              }}
            >
              Get saga Users
            </button>
          </div>
          <div>
            {this.props.sagaUserTitle.map((el) => (
              <div key={el.id}>
                <div>
                  Name - {el.name} Email - {el.email}
                </div>
              </div>
            ))}
          </div>
          <SliderSagas />
        </div>
        <div>
          <button
            onClick={() => {
              this.props.onCheckKnowledge();
            }}
          >
            Check knowledge
          </button>
          <div>{this.props.knowledgeWords}</div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    elements: state.addElement.filter((word) =>
      word.inputValue.includes(state.filterElements)
    ),
    knowledgeWords: state.knowledgeCheck,
    axiosElements: state.axiosRequest,
    sagaReducer: state.sagaReducer,
    sagaUserTitle: state.sagaUserReducer,
  }),
  (dispatch) => ({
    onAddElement: (inputValue) => {
      const payload = {
        id: Date.now().toString(),
        inputValue,
      };
      dispatch(onAddElement(payload));
    },
    onCheckKnowledge: () => {
      dispatch(checkKnowledge());
    },
    onFilterElements: (filterValue) => {
      dispatch(onFilterElements(filterValue));
    },
    onIncrementElement: () => {
      dispatch(asyncIncrementAction());
    },
    onDecrementElement: () => {
      dispatch(asyncDecrementAction());
    },
    onSagaUsers: () => {
      dispatch(asyncGetSagaUsers());
    },
  })
)(ReduxIndex);
