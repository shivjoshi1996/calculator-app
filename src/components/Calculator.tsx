import CalculatorHeader from "./CalculatorHeader";
import styled from 'styled-components';
import { useState } from "react";
import CalculatorButton from "./CalculatorButton";

const StyledCalculator = styled.div`
width: 90%;
margin: 0 auto;
font-family: ${props => props.theme.font.main};
max-width: 327px;

@media (min-width: 768px) {
  max-width: 540px;
}

`;

const StyledCalculatorDisplay = styled.div`

  margin-bottom: 1.5rem;
  border-radius: 10px;

  input[type="text"] {
    width: 100%;
    font-size: 2rem;
    color: ${props => props.theme.colors.calculatorHeaderTextColour};
    background-color: ${props => props.theme.colors.screenBackground};
    border: none;
    font-weight: 700; 
    text-align: right;
    border-radius: 10px;
    padding: 1.625rem 1.5rem;
    font-family: ${props => props.theme.font.main};


    @media (min-width: 768px) {
      padding: 2.375rem 2rem;
      font-size: 3rem;
    }
  }


  `;



const StyledCalculatorbody = styled.div`
background-color: ${props => props.theme.colors.buttonBackground};
padding: 24px;
border-radius: 10px;

display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 13px;

.half-width {
  grid-column: span 2;
}

`;

type CalculatorProps = {
  themeToggleValue: string;
  handleToggleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function Calculator(props: CalculatorProps) {

  const [calculator, setCalculator] = useState({
    display: "0",
    operator: "",
    firstNumber: "",
    secondNumber: "",
    result: 0,
  });


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
      <CalculatorHeader handleToggleChange={props.handleToggleChange} themeToggleValue={props.themeToggleValue} header="Calc" />
      <StyledCalculatorDisplay>
        <input type="text" value={calculator.display} readOnly />
      </StyledCalculatorDisplay>
      <StyledCalculatorbody>
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="7" />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="8" />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="9" />
        <CalculatorButton color="second" buttonHandler={deleteLastDigit} value="DEL" />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="4" />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="5" />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="6" />
        <CalculatorButton buttonHandler={handleOperatorButton} value="+" />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="1" />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="2" />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="3" />
        <CalculatorButton buttonHandler={handleOperatorButton} value="-" />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="." />
        <CalculatorButton buttonHandler={handleCalculatorNumberButton} value="0" />
        <CalculatorButton buttonHandler={handleOperatorButton} value="/" />
        <CalculatorButton buttonHandler={handleOperatorButton} value="x" />
        <CalculatorButton className="half-width" color="second" buttonHandler={resetCalculator} value="RESET" />
        <CalculatorButton className="half-width" color="third" buttonHandler={handleEquals} value="=" />
      </StyledCalculatorbody>
    </StyledCalculator>
  )
}