import styled from 'styled-components';
import Calculator from './Calculator';


const StyledPage = styled.div`
  background: ${props => props.theme.colors.mainBackground};
  height: 100vh;
  width: 100vw;
`;

const StyledPageContainer = styled.div`
  @media (min-width: 768px) {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
`;

export default function Page(props: any) {
  return (
    <StyledPage>
      <StyledPageContainer>
        <Calculator handleToggleChange={props.handleToggleChange} themeToggleValue={props.themeToggleValue} />
      </StyledPageContainer>
    </StyledPage>
  );
}