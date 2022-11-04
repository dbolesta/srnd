import styled from "styled-components";

const MenuContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MenuList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    flex-direction: column;

    span {
        font-size: 15vh;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        /* transition: all 0.02s ease-in-out; */

        &:hover {
            color: #489ADA;
            transform: scale(1.05);
        }
    }
`;

const Letter = styled.div`
    font-size: 15vh;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: #489ADA;
    position: absolute;



    top: ${props => props.top || 'auto'};
    left: ${props => props.left || 'auto'};
    right: ${props => props.right || 'auto'};
    bottom: ${props => props.bottom || 'auto'};


    span:last-of-type {
        display: none;
        color: #da4949;
    }

    &:hover{
        span:first-of-type {
            display:none;
        }
        span:last-of-type {
            display:inline-block;
        }
    }


`;

const Menu = () => {
  return (
    <MenuContainer>
        <Letter top={'0px'} left={'10px'}><span>S</span><span>X</span></Letter>
        <Letter top={'0px'} right={'10px'}><span>R</span><span>X</span></Letter>
        <Letter bottom={'0px'} left={'10px'}><span>N</span><span>X</span></Letter>
        <Letter bottom={'0px'} right={'10px'}><span>D</span><span>X</span></Letter>

        <MenuList>
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>Earth Cam</span>
        </MenuList>
    </MenuContainer>
  )
}

export default Menu