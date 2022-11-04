import styled from 'styled-components';

const StyledBGHolder = styled.div`
    /* background-color: #141414; */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledTitle = styled.h1`
    font-size: 13vw;
    font-family: 'Lexend Deca', sans-serif;
    color: #e5e5e5;
`;

const StyledTopTitle = styled.h1`
    font-size: 4vw;
    font-family: 'Lexend Deca', sans-serif;
    color: #e5e5e5;
    position: absolute;
    top: 15px;
    margin: auto;
    text-align: center;
`;

const BackgroundTitle = ({onScreen}) => {
  return (
    <StyledBGHolder>
        {!onScreen ? 
            <StyledTitle>SRND Studios</StyledTitle>
            :
            <StyledTopTitle>SRND Studios</StyledTopTitle> 
        }

    </StyledBGHolder>
  )
}

export default BackgroundTitle