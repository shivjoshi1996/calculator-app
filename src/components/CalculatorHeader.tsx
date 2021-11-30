import styled from 'styled-components';

const StyledCalculatorHeader = styled.div`
  display: flex;
  width: 100%;
`;

export default function CalculatorHeader() {
  return (
    <StyledCalculatorHeader>
      <h1>Calc</h1>
      <p>Theme 1 2 3</p>
    </StyledCalculatorHeader>
  )
}