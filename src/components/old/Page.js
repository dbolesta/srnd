import styled from 'styled-components';

const StyledPage = styled.div`
    /* border: 4px solid black; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: relative;
`;


const Page = ({children}) => {
  return (
    <StyledPage>
        {children}
    </StyledPage>
  )
}

export default Page