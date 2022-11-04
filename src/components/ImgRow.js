import styled from 'styled-components';
import images from './../images';

const ImgRowContainer = styled.div`
    

    /* @media (max-width: 740px) {
        font-size: 1rem;
    } */

    display: flex;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Blok = styled.div`
    height: 33rem;
    /* border: 1px solid red; */
    flex: 0 1 ${props => props.width};
    display: flex;
    overflow: hidden;
    align-items: center;
    background-color: ${props => props.bgColor || 'white'};


    /* width:  */

    img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }

    p {
        text-transform: uppercase;
        margin-left: 5%;
    }

`;



const ImgRow = () => {
  return (
    <ImgRowContainer>
        <Blok width={'30%'} bgColor={'#FDF5F5'}>
            <p>please</p>
        </Blok>
        <Blok width={'30%'}>
            <img src={images[1]} alt="cool man"/>
        </Blok>
        <Blok width={'30%'}>
            <img src={images[0]} alt="bloks"/>
        </Blok>
        <Blok width={'10%'} bgColor={'#C3B39C'}></Blok>
    </ImgRowContainer>
  )
}

export default ImgRow