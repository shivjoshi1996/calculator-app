import CalculatorHeader from "./CalculatorHeader";
import { useState, useEffect } from "react";

export default function Calculator() {

  let [calculator, setCalculator] = useState({
    value: null,
    displayValue: "0",
    operator: null,
    waitingForOperand: false
  });


  function handleCalculatorNumberButtonInput(e: any) {
    const value = e.target.innerHTML;

    setCalculator({
      ...calculator,
      value,
      displayValue: calculator.displayValue === "0" && value === 0 ? "0" // Check if both values are 0, if so, only set one zero (so user cannot set multiple zeros)
        : calculator.displayValue.includes(".") && value === "." ? calculator.displayValue //Check if displayvalue already has a decimal, if so, don't add another one
          : calculator.displayValue === "0" && value !== 0 ? value // Check if display value is 0 and value is not 0, if so, set value
            : calculator.displayValue + value.toString(), // If checks are passed, add value to display value
    })
  }

  console.log(calculator);

  return (
    <>
      <CalculatorHeader />
      <input type="text" value={calculator.displayValue} readOnly />
      <button onClick={handleCalculatorNumberButtonInput}>7</button>
      <button onClick={handleCalculatorNumberButtonInput}>8</button>
      <button onClick={handleCalculatorNumberButtonInput}>9</button>
      <button>DEL</button>
      <button onClick={handleCalculatorNumberButtonInput}>4</button>
      <button onClick={handleCalculatorNumberButtonInput}>5</button>
      <button onClick={handleCalculatorNumberButtonInput}>6</button>
      <button>+</button>
      <button onClick={handleCalculatorNumberButtonInput}>1</button>
      <button onClick={handleCalculatorNumberButtonInput}>2</button>
      <button onClick={handleCalculatorNumberButtonInput}>3</button>
      <button>-</button>
      <button onClick={handleCalculatorNumberButtonInput}>.</button>
      <button onClick={handleCalculatorNumberButtonInput}>0</button>
      <button>/</button>
      <button>x</button>
      <button>RESET</button>
      <button>=</button>
    </>
  )
}