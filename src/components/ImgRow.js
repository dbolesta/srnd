import styled from 'styled-components';
import assets from '../assets';
import Marquee from "react-fast-marquee";

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
    position: relative;
`;

const Blok = styled.div`
    height: 33rem;
    /* border: 1px solid red; */
    flex: 0 1 ${props => props.width};
    display: flex;
    overflow: hidden;
    align-items: center;
    background-color: ${props => props.bgColor || 'white'};
    position: relative;


    /* width:  */

    img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }

    p {
        text-transform: uppercase;
        margin-left: 5%;
        font-size: 1.2rem;
    }

    span {
        position: absolute;
        top: 10px;
        left: 10px;
        cursor: pointer;
    }

`;

const SR = styled.div`

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

const ImgRow = ({handleOpenModal}) => {
  return (
    <ImgRowContainer>
        

        <Blok width={'30%'} bgColor={'#FDF5F5'}>
            <p>please</p>
        </Blok>
        <Blok width={'30%'}>
            <span onClick={handleOpenModal}>Click here</span>
            <img src={assets.images.manF} alt="cool man"/>
            <Marquee className="mq" gradient={false} speed={30} style={{marginTop: '50%'}}>
                The Smashing Pumpkins Music Video &nbsp; &nbsp; &nbsp; &nbsp; The Smashing Pumpkins Music Video &nbsp; &nbsp; &nbsp; &nbsp;
            </Marquee>
        </Blok>
        <Blok width={'30%'}>
            <img src={assets.images.colorBlocks} alt="bloks"/>
        </Blok>
        <Blok width={'10%'} bgColor={'#C3B39C'}></Blok>

        <SR><span>S</span><span>R</span></SR>
    </ImgRowContainer>
  )
}

export default ImgRow