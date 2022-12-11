import styled from 'styled-components';
import assets from '../assets';

const ShowContainer = styled.div`
    overflow: hidden;
    max-height: 40rem;
    height: 100%;
    position: relative;

    img {
        min-width: 100%;
        min-height: 100%;
        height: 100%;
        object-fit: cover;
        width: 100%;
    }

    @media (max-width: 740px) {
        font-size: 1rem;
    }
`;

const ND = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: 20%;

    span {
        color: #489ADA;
        padding: 1rem;
        font-weight: 700;
        font-size: 8rem;
    }

`;


const Show = () => {
  return (
    <ShowContainer>

        <img src={assets.images.show} alt="show"/>
        <ND><span>N</span><span>D</span></ND>
    </ShowContainer>
  )
}

export default Show