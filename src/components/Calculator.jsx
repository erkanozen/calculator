import { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const HandleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };
  const HandleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };
  const HandleIncrement = (e) => {
    e.preventDefault();
    setResult(number1 + number2);
  };
  const HandleDecrease = (e) => {
    e.preventDefault();
    setResult(number1 - number2);
  };
  const HandleDivide = (e) => {
    e.preventDefault();
    setResult(number1 / number2);
  };
  const HandleMultiply = (e) => {
    e.preventDefault();
    setResult(number1 * number2);
  };
  const HandleClearButton = (e) => {
    e.preventDefault();
    setNumber1("");
    setNumber2("");
    setResult(0);
  };
  return (
    <div className="calculator">
      <h1 className="title">useState( )</h1>
      <form className="calculator-form">
        <div className="calculator-input">
          <label htmlFor="number1" className="calculator-label">
            Number1
          </label>
          <input
            id="number1"
            className="input"
            value={number1}
            onChange={HandleNumber1Change}
            type="number"
            placeholder="Please enter a number"
          />
        </div>
        <div className="calculator-input">
          <label htmlFor="number2" className="calculator-label">
            Number2
          </label>
          <input
            id="number2"
            className="input"
            value={number2}
            onChange={HandleNumber2Change}
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
          <input className="input" readOnly value={result} type="number" />
        </div>
        <button onClick={HandleClearButton} className="Clear-button">
          Clear Input
        </button>
      </form>
    </div>
  );
};

export default Calculator;
