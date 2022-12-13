import styled from 'styled-components';
import assets from '../assets';
import Marquee from "react-fast-marquee";

const ShowContainer = styled.div`
    /* overflow: hidden; */
    /* max-height: 40rem; */
    /* height: 100%; */
    position: relative;
    background-color: #FFE9E9;
    display: flex;
    align-items: center;
    justify-content: center;

    .imgContainer {
        width: 100%;
        /* border:1px solid black; */
        height: 100%;
        min-height: 100%;
        padding: 1rem;

        img {
            width: 100%;
            object-fit: cover;
            min-width: 100%;
            height: 100%;
            min-height: 100%;
        }
    }
    
    
    img {
        /* min-width: 100%;
        min-height: 100%;
        height: 100%;
        object-fit: cover;
        width: 100%; */
        /* padding: 4rem; */
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
        {/* <video src={assets.videos.aic} width="100%" autoPlay loop muted></video> */}
        


        <div className="imgContainer">
            <img src={assets.images.sequence1} alt="show"/>
        </div>
        <div className="imgContainer">
            <img src={assets.images.sequence2} alt="show"/>
        </div>
        <div className="imgContainer">
            <img src={assets.images.sequence3} alt="show"/>
        </div>
        {/* <ND><span>N</span><span>D</span></ND> */}
    </ShowContainer>
  )
}

export default Show