import React, { useReducer } from "react";
import "./Calculator.css";

function reducer(state, action) {
  switch (action.type) {
    case "SET_NUMBER1":
      return { ...state, number1: action.payload };
    case "SET_NUMBER2":
      return { ...state, number2: action.payload };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    case "CLEAR_INPUT":
      return { number1: "", number2: "", result: "" };
    default:
      throw new Error("Invalid action type");
  }
}
const initialState = {
  number1: "",
  number2: "",
  result: "",
};

const CalculatorReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const HandleNumber1Change = (e) => {
   
    dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) });
  };

  const HandleNumber2Change = (e) => {
    dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) });
  };

  const HandleIncrement = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_RESULT", payload: state.number1 + state.number2 });
  };
  const HandleDecrease = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_RESULT", payload: state.number1 - state.number2 });
  };
  const HandleDivide = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_RESULT", payload: state.number1 / state.number2 });
  };

  const HandleMultiply = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_RESULT", payload: state.number1 * state.number2 });
  };

  const HandleClearButton = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_INPUT" });
  };

  return (
    <div className="calculator">
      <h1 className="title">useReducer( )</h1>
      <form className="calculator-form">
        <div className="calculator-input">
          <label htmlFor="number1reducer" className="calculator-label">
            Number1
          </label>
          <input
            value={state.number1}
            onChange={HandleNumber1Change}
            id="number1reducer"
            className="input"
            type="number"
            placeholder="Please enter a number"
          />
        </div>
        <div className="calculator-input">
          <label htmlFor="number2reducer" className="calculator-label">
            Number2
          </label>
          <input
            value={state.number2}
            onChange={HandleNumber2Change}
            id="number2reducer"
            className="input"
            type="number"
            placeholder="Please enter a number"
          />
        </div>
        <div className="calculator-button">
          <button onClick={HandleIncrement} className="increment">
            +
          </button>
          <button onClick={HandleDecrease} className="decrease">
            -
          </button>
        </div>
        <div className="calculator-button">
          <button onClick={HandleDivide} className="divide">
            /
          </button>
          <button onClick={HandleMultiply} className="multiply">
            x
          </button>
        </div>
        <div className="calculator-input">
          <label className="calculator-label">Result</label>
          <input readOnly value={state.result} className="input" type="number" />
        </div>
        <button onClick={HandleClearButton} className="Clear-button">
          Clear Input
        </button>
      </form>
    </div>
  );
};

export default CalculatorReducer;
