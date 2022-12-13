import styled from 'styled-components';
import assets from '../assets';
import Marquee from "react-fast-marquee";

const ShowContainer = styled.div`
    overflow: hidden;
    /* max-height: 40rem; */
    /* height: 100%; */
    position: relative;

    img {
        min-width: 100%;
        min-height: 100%;
        height: 100%;
        object-fit: cover;
        width: 100%;
    }

    video {
        width: 100%;
        /* height: 100%; */
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
        <Marquee className="mq2" gradient={false} speed={130} style={{marginTop: '18%'}}>
            Alice In Chains Music Video &nbsp; Alice In Chains Music Video &nbsp;
        </Marquee>
        <video src={assets.videos.aic} width="100%" autoPlay loop muted></video>
        

        {/* <img src={assets.images.show} alt="show"/> */}
        {/* <ND><span>N</span><span>D</span></ND> */}
    </ShowContainer>
  )
}

export default Show