import styled from 'styled-components';

const HeaderContainer = styled.div`
    background-color: #489ADA;
    color: black;
    padding: 1rem;
    position: relative;

    h1 {
        margin: 0;
        margin-bottom: 1rem;
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

        <Blurb>
            <p>SRND is short for Surround.</p>
            <p>We are a creative studio located in DUMBO Brooklyn, NY. Working in the areas of Live Experiencial Video, Music Video, Print</p>
        </Blurb>

        <Blurb>
            <p>To enter the Instagram</p>
            <p>Please, email only at Info@srndstudios.com</p>
            <p>If you really want to call 7186288484</p>
        </Blurb>

        <Blurb>
            <p>Let's make some progress.</p>
        </Blurb>
    </HeaderContainer>
  )
}

export default Header