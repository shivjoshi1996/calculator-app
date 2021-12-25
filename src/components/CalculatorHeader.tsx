import styled from 'styled-components';

const StyledCalculatorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 28px;
  margin-bottom: 32px;
  color: ${props => props.theme.colors.calculatorHeaderTextColour};

  h1 {
    font-size: 32px;
  }
  `;

const StyledThemeToggleWrapper = styled.div`
  width: 144px;
  height: 44px;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: auto 71px;
  grid-template-rows: auto auto;
  column-gap: 21px;

  .theme-toggle-label {
    grid-row: 2;
    grid-column: 1;
  }

  .theme-numbers {
    display: flex;
    grid-column: 2;
    width: 100%;
    justify-content: space-around;
  }

  .theme-toggle {
    grid-row: 2;
    grid-column: 2;
    cursor: pointer;
  }

  p {
    font-size: 12px;
  }
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
  themeToggleValue: string,
  handleToggleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CalculatorHeader(props: HeaderProps) {

  return (
    <StyledCalculatorHeader>
      <h1>{props.header}</h1>
      <StyledThemeToggleWrapper>
        <div className="theme-toggle-label">
          <p>THEME</p>
        </div>
        <div className="theme-numbers">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className="theme-toggle">
          <input type="range" min="1" step="1" max="3" value={props.themeToggleValue} onChange={props.handleToggleChange} />
        </div>
      </StyledThemeToggleWrapper>
    </StyledCalculatorHeader>
  )
}