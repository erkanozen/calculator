import "./App.css";
import Calculator from "./components/Calculator";
import CalculatorReducer from "./components/CalculatorReducer";

function App() {
  return (
    <div className="App">
      <Calculator />
      <CalculatorReducer />
    </div>
  );
}

export default App;
