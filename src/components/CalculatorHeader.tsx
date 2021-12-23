import styled from 'styled-components';

const StyledCalculatorHeader = styled.div`
  display: flex;
  width: 100%;
`;

type HeaderProps = {
  header: string;
}

export default function CalculatorHeader(props: HeaderProps) {
  return (
    <StyledCalculatorHeader>
      <h1>{props.header}</h1>
      <p>Theme 1 2 3</p>77777
    </StyledCalculatorHeader>
  )
}