import styled from 'styled-components';
import images from './../images';

const ImgRowContainer = styled.div`
    

    /* @media (max-width: 740px) {
        font-size: 1rem;
    } */

    display: flex;
    width: 100%;
    margin: auto;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: row;
    position: relative;
`;

const Blok = styled.div`
    /* border: 1px solid red; */
    flex: 0 1 ${props => props.width};
    display: flex;
    overflow: ${props => props.overflow || 'hidden'};
    align-items: center;
    position: relative;
    background-color: ${props => props.bgColor || 'white'};


    /* width:  */

    img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        top: 30px;
        left: 30px;
        width: 300px;
        z-index: 30;
        font-weight: 800;
        font-size: 1.3rem;
    }

`;


const SRND = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 8%;
    z-index: 10;

    span {
        color: #489ADA;
        padding: 1rem;
        font-weight: 700;
        font-size: 8rem;
    }

`;

const BrianAndBrad = () => {
  return (
    <ImgRowContainer>
        <Blok width={'10%'} bgColor={'white'} overflow={'visible'}>
            <p>This is me Brian Palmer</p>
        </Blok>
        <Blok width={'45%'}>
            <img src={images.manF} alt="cool man"/>
        </Blok>
        <Blok width={'45%'}>
            <p>and Brad Palmer</p>
            <img src={images.manB} alt="bloks"/>
        </Blok>
        <SRND><span>S</span><span>R</span><span>N</span><span>D</span></SRND>
    </ImgRowContainer>
  )
}

export default BrianAndBrad