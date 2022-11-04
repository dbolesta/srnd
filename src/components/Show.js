import styled from 'styled-components';
import images from './../images';

const ShowContainer = styled.div`
    overflow: hidden;
    max-height: 40rem;

    img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
        width: 100%;
    }

    @media (max-width: 740px) {
        font-size: 1rem;
    }
`;


const Show = () => {
  return (
    <ShowContainer>

        <img src={images[3]} alt="show"/>

    </ShowContainer>
  )
}

export default Show