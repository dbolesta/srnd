import styled from 'styled-components';
import assets from '../assets';
import Marquee from "react-fast-marquee";

const ShowContainer = styled.div`
    overflow: hidden;
    /* max-height: 40rem; */
    /* height: 100%; */
    position: relative;
    background-color: #FFE9E9;

    h1 {

        position: absolute;
        top: 0;
        left: 4rem;
        font-size: 12vw;
        line-height: 1;
        text-transform: uppercase;
        margin: 0;

    }

    img {
        min-width: 100%;
        min-height: 100%;
        height: 100%;
        object-fit: cover;
        width: 100%;
        /* padding: 4rem; */
        padding-left: 5rem;
        padding-right: 6rem;
        padding-bottom: 2rem;
    }

    video {
        width: 100%;
        height: 100%;
        margin: 0;
        vertical-align: top;
        object-fit: cover;
        position: relative;
    }
    .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
    font-size: 36px;
    font-weight: bold;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
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
        {/* <Marquee className="mq2" gradient={false} speed={130} style={{marginTop: '18%'}}>
            Rihanna Music Video &nbsp; Rihanna Music Video &nbsp;
        </Marquee> */}
        {/* <video src={assets.videos.aic} width="100%" autoPlay loop muted></video> */}
        

        <img src={assets.images.futurePast} alt="show"/>
        <h1>The<br/>Future<br/>Past</h1>
        {/* <ND><span>N</span><span>D</span></ND> */}
    </ShowContainer>
  )
}

export default Show