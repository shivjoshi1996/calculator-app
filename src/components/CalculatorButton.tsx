import styled from "styled-components";


const StyledButton = styled.button`


cursor: pointer;
font-family: ${props => props.theme.font.main};
  height: 64px;
  width: 100%;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  transition: 0.5s;
  text-align: center;

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

&:hover {
  background-color: ${(props) => {
    if (props.color === "third") {
      return props.theme.colors.buttonThirdHover;
    } else if (props.color === "second") {
      return props.theme.colors.buttonSecondHover;
    } else {
      return props.theme.colors.buttonFirstHover;
    }
  }};
  }

  &:active {
    box-shadow: none;
    transform: translateY(4px);
  }
  
  @media (max-width: 18.125rem) {
    font-size: 10px;
    height: 50px;
  }
  @media (min-width: 768px) {
    font-size: ${(props) => {
    if (props.color === "third" || props.color === "second") {
      return "1.25rem";
    } else {
      return "2rem";
    }
  }};
  }
`;

type CalculatorButtonProps = {
  color?: string;
  value: string;
  buttonHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

export default function CalculatorButton({ color, value, buttonHandler, className }: CalculatorButtonProps) {
  return (
    <StyledButton className={className} onClick={buttonHandler} color={color}>{value}</StyledButton>
  )
}