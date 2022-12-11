import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #f6ea72; 
    color: black;
    padding: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

    h1 {
        margin: 0;
        margin-bottom: 1rem;
        font-size: 12vw;
        letter-spacing: 23px;
    }


    @media (max-width: 740px) {
        font-size: 1rem;
    }
`;

const Blurb = styled.div`
    margin-bottom: 5rem;



    p { 
        margin: 0;
        margin-bottom: 0.25rem; 
        font-size: 1.2rem;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const MenuBtn = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`;

const Header = ({handleClick}) => {
  return (
    <HeaderContainer >

        <MenuBtn onClick={handleClick}><span>Menu</span></MenuBtn>

        <h1>SRND</h1>

       
    </HeaderContainer>
  )
}

export default Header