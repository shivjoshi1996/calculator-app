import CalculatorHeader from "./CalculatorHeader";
import { useState, useEffect } from "react";

export default function Calculator() {

  interface CalculatorObject {
    value: number | null;
    displayValue: string;
    operator: string | null;
    waitingForOperand: boolean;
  }

  let [calculator, setCalculator] = useState<CalculatorObject>({
    value: null,
    displayValue: "0",
    operator: null,
    waitingForOperand: false
  });

  function handleCalculatorNumberButton(e: any) {
    const value = e.target.innerHTML;

    setCalculator({
      ...calculator,
      displayValue: calculator.displayValue === "0" && value === 0 ? "0" // Check if both values are 0, if so, only set one zero (so user cannot set multiple zeros)
        : calculator.displayValue.includes(".") && value === "." ? calculator.displayValue //Check if displayvalue already has a decimal, if so, don't add another one
          : calculator.displayValue === "0" && value !== 0 ? value // Check if display value is 0 and value is not 0, if so, set value
            : calculator.displayValue + value.toString(), // If checks are passed, add value to display value
    })
  }


  function handleOperatorButton(e: any) {
    const operator = e.target.innerHTML;

    setCalculator({
      value: Number(calculator.displayValue),
      operator,
      displayValue: calculator.waitingForOperand === true ? calculator.displayValue : "0",
      waitingForOperand: true,
    })
  }

  function resetCalculator() {
    setCalculator({
      value: null,
      displayValue: "0",
      operator: null,
      waitingForOperand: false
    })
  }

  function deleteLastDigit() {
    setCalculator({
      ...calculator,
      displayValue: calculator.displayValue.slice(0, -1) || "0",
    })
  }

  console.log(calculator);

  function handleCalculation() {
    console.log(calculator.value, calculator.displayValue, calculator.operator, calculator.waitingForOperand);

    if (calculator.operator === "+" && calculator.value !== null) {
      setCalculator({
        ...calculator,
        value: calculator.value + Number(calculator.displayValue),
        displayValue: (calculator.value + Number(calculator.displayValue)).toString(),
        waitingForOperand: false,
      })
    }
  }

  return (
    <>
      <CalculatorHeader />
      <input type="text" value={calculator.displayValue} readOnly />
      <button onClick={handleCalculatorNumberButton}>7</button>
      <button onClick={handleCalculatorNumberButton}>8</button>
      <button onClick={handleCalculatorNumberButton}>9</button>
      <button onClick={deleteLastDigit}>DEL</button>
      <button onClick={handleCalculatorNumberButton}>4</button>
      <button onClick={handleCalculatorNumberButton}>5</button>
      <button onClick={handleCalculatorNumberButton}>6</button>
      <button onClick={handleOperatorButton}>+</button>
      <button onClick={handleCalculatorNumberButton}>1</button>
      <button onClick={handleCalculatorNumberButton}>2</button>
      <button onClick={handleCalculatorNumberButton}>3</button>
      <button>-</button>
      <button onClick={handleCalculatorNumberButton}>.</button>
      <button onClick={handleCalculatorNumberButton}>0</button>
      <button>/</button>
      <button>x</button>
      <button onClick={resetCalculator}>RESET</button>
      <button onClick={handleCalculation}>=</button>
    </>
  )
}