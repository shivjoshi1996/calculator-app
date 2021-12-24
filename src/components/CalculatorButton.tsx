import styled from "styled-components";


const StyledButton = styled.button`

  font-family: ${props => props.theme.font.main};
  height: 64px;
  font-weight: 700;
  border: none;
  border-radius: 5px;

  font-size: ${(props) => {
    if (props.color === "third" || props.color === "second") {
      return "16px";
    } else {
      return "28px";
    }
  }};

  color: ${(props) => {
    if (props.color === "third") {
      return props.theme.colors.buttonTextColour2;
    } else if (props.color === "second") {
      return props.theme.colors.buttonTextColour2;
    } else {
      return props.theme.colors.buttonTextColor;
    }
  }};

  background-color: ${(props) => {
    if (props.color === "third") {
      return props.theme.colors.buttonThird;
    } else if (props.color === "second") {
      return props.theme.colors.buttonSecond;
    } else {
      return props.theme.colors.buttonFirst;
    }
  }};

box-shadow: inset 0px -4px 0px ${(props) => {
    if (props.color === "third") {
      return props.theme.colors.buttonThirdShadow;
    } else if (props.color === "second") {
      return props.theme.colors.buttonSecondShadow;
    } else {
      return props.theme.colors.buttonFirstShadow;
    }
  }};
`;

export default function CalculatorButton({ color, value, buttonHandler, className }: { color?: string, value: string, buttonHandler: any, className?: string }) {
  return (
    <StyledButton className={className} onClick={buttonHandler} color={color}>{value}</StyledButton>
  )
}