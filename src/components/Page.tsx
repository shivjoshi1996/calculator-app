import styled from 'styled-components';
import Calculator from './Calculator';


const StyledPage = styled.div`
  background: ${props => props.theme.colors.mainBackground};
  height: 100vh;
  width: 100vw;
`;

const StyledPageContainer = styled.div`
 
`;

export default function Page(props: object) {
  return (
    <StyledPage>
      <StyledPageContainer>
        <Calculator />
      </StyledPageContainer>
    </StyledPage>
  );
}