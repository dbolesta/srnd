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




const BrianAndBrad = () => {
  return (
    <ImgRowContainer>
        <Blok width={'10%'} bgColor={'white'} overflow={'visible'}>
            <p>This is me Brian Palmer</p>
        </Blok>
        <Blok width={'45%'}>
            <img src={images[1]} alt="cool man"/>
        </Blok>
        <Blok width={'45%'}>
            <p>and Brad Palmer</p>
            <img src={images[2]} alt="bloks"/>
        </Blok>
    </ImgRowContainer>
  )
}

export default BrianAndBrad