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
        font-size: 6rem;
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

const Menu = () => {
  return (
    <MenuContainer>
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