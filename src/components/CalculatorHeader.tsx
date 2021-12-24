import styled from 'styled-components';

const StyledCalculatorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 28px;
  margin-bottom: 32px;

  h1 {
    font-size: 32px;
  }
  `;

const StyledThemeToggleWrapper = styled.div`
  width: 71px;
  height: 44px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  input {
    width: 100%;
    grid-column: span 3;
  }

  /* Special styling for WebKit/Blink */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 100px;
  background:  ${props => props.theme.colors.toggleColour};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.toggleHoverColour};
  }

}

/* All the same stuff for Firefox */
input[type=range]::-moz-range-thumb {
  height: 16px;
  width: 16px;
  border-radius: 100px;
  background:  ${props => props.theme.colors.toggleColour};
  cursor: pointer;

}

/* All the same stuff for IE */
input[type=range]::-ms-thumb {
  height: 16px;
  width: 16px;
  border-radius: 100px;
  background:  ${props => props.theme.colors.toggleColour};
  cursor: pointer;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 26px;
  cursor: pointer;
  background: #242D44;
  border-radius: 13px;
  padding: 5px;
}

input[type=range]::-moz-range-track {
  width: 100%;
  height: 26px;
  cursor: pointer;
  background: #242D44;
  border-radius: 13px;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 26px;
  cursor: pointer;
  background: #242D44;
  border-radius: 13px;
}
input[type=range]::-ms-fill-lower {
  background: #242D44;
}
input[type=range]::-ms-fill-upper {
  background: #242D44;
}
`;



type HeaderProps = {
  header: string;
}

export default function CalculatorHeader(props: HeaderProps) {
  return (
    <StyledCalculatorHeader>
      <h1>{props.header}</h1>
      <StyledThemeToggleWrapper>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <input type="range" min="1" step="1" max="3" />
      </StyledThemeToggleWrapper>
    </StyledCalculatorHeader>
  )
}