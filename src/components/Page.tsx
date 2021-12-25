import styled from 'styled-components';
import Calculator from './Calculator';


const StyledPage = styled.div`
  background: ${props => props.theme.colors.mainBackground};
  height: 100vh;
  width: 100vw;
  transition: 1s;
`;

const StyledPageContainer = styled.div`
 
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