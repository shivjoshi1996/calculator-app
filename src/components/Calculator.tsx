import CalculatorHeader from "./CalculatorHeader";
import styled from 'styled-components';
import { useEffect, useState } from "react";

const StyledCalculator = styled.div`
width: 50%;
margin: 0 auto;
`;



const StyledCalculatorbody = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
button {
  height: 50px;
}

  `;

export default function Calculator() {

  const [calculator, setCalculator] = useState({
    display: "0",
    operator: "",
    firstNumber: "",
    secondNumber: "",
    result: 0,
  });
  console.log(calculator);


  function handleCalculatorNumberButton(e: any) {

    const number = e.target.innerHTML;

    if (number === "." && calculator.display.includes(".")) {
      return;
    }

    setCalculator((prevCalculator) => ({
      ...prevCalculator,
      display: prevCalculator.display === "0" ? number : prevCalculator.display + number,
    }));

  }

  function deleteLastDigit() {
    setCalculator((prevCalculator) => ({
      ...prevCalculator,
      display: prevCalculator.display.slice(0, -1),
    }));
  }

  function handleOperatorButton(e: any) {

    const operator = e.target.innerHTML;

    if (calculator.display === "0") {
      return;
    };

    if (calculator.operator === "" && calculator.firstNumber === "") {
      setCalculator((prevCalculator) => ({
        ...prevCalculator,
        firstNumber: prevCalculator.display,
        operator: operator,
        display: "0",
      }));
    }


  }

  function resetCalculator() {
    setCalculator({
      display: "0",
      operator: "",
      firstNumber: "",
      secondNumber: "",
      result: 0,
    });

  }

  function handleEquals() {

    if (calculator.operator === "" || calculator.firstNumber === "") {
      return;
    }

    const result = handleCalculation();


    setCalculator((prevCalculator) => ({
      ...prevCalculator,
      result: result,
      display: result.toString(),
      firstNumber: "",
      operator: "",
    }))


  }

  function handleCalculation() {

    let result: number = 0;

    switch (calculator.operator) {
      case "+":
        result = parseFloat(calculator.firstNumber) + parseFloat(calculator.display);
        break;
      case "-":
        result = parseFloat(calculator.firstNumber) - parseFloat(calculator.display);
        break;
      case "x":
        result = parseFloat(calculator.firstNumber) * parseFloat(calculator.display);
        break;
      case "/":
        result = parseFloat(calculator.firstNumber) / parseFloat(calculator.display);
        break;
      default:
        break;
    }

    return result;
  }

  return (
    <StyledCalculator>
      <CalculatorHeader header="Calc" />
      <input type="text" value={calculator.display} readOnly />
      <StyledCalculatorbody>
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
        <button onClick={handleOperatorButton}>-</button>
        <button onClick={handleCalculatorNumberButton}>.</button>
        <button onClick={handleCalculatorNumberButton}>0</button>
        <button onClick={handleOperatorButton}>/</button>
        <button onClick={handleOperatorButton}>x</button>
        <button onClick={resetCalculator}>RESET</button>
        <button onClick={handleEquals}>=</button>
      </StyledCalculatorbody>
    </StyledCalculator>
  )
}