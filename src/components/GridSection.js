import styled from 'styled-components'
import assets from '../assets';
import Marquee from "react-fast-marquee";

const GridSectionContainer = styled.div`

    padding-bottom: 3rem;

    @media (max-width: 740px) {
        /* font-size: 1rem; */
    }
`;

const GridRow = styled.div`
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: row;
    position: relative;
`;

const GridBox = styled.div`
    display: flex;
    overflow: hidden;
    flex: 0 1 ${props => props.basis};
    flex-direction: column;
    background-color: ${props => props.bgColor || 'white'};
    padding: ${props => props.padding || '0'};
    position: relative;
    

    img {
        min-width: 100%;
        min-height: 100%;
        object-fit: ${props => props.objFit || 'cover' };
    }

    p {
        text-transform: uppercase;
        width: 100%;
        margin: 0;
        /* padding: 1rem; */
        font-weight: 700;
        text-align: justify;
        font-size: 2.75rem;
    }
`;


const SRNDone = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: -20%;
    z-index: 10;

    span {
        color: #489ADA;
        padding: 1rem;
        font-weight: 700;
        font-size: 8rem;
    }

`;

const SRNDtwo = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    position: absolute;
    right: 0;
    top: 30px;
    z-index: 10;

    span {
        color: #489ADA;
        padding: 1rem;
        font-weight: 700;
        font-size: 8rem;
    }

`;

const SR = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 10;

    span {
        color: #489ADA;
        padding: 1rem;
        font-weight: 700;
        font-size: 8rem;
    }

`;

const ND = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: -40%;
    z-index: 10;

    span {
        color: #489ADA;
        padding: 1rem;
        font-weight: 700;
        font-size: 8rem;
    }

`;

const GridSection = () => {
  return (
    <GridSectionContainer>
        <GridRow>
            <GridBox basis={'42%'} padding={'1rem'}>
                <p>the more you push</p>
                <p>the harder it</p>
                <p>gets.</p>
            </GridBox>
            <GridBox basis={'58%'} objFit={'cover'}>
                <img src={assets.images.book} alt="cool man"/>
            </GridBox>
            <SRNDone><span>S</span><span>R</span><span>N</span><span>D</span></SRNDone>
        </GridRow>

        <GridRow>
            <GridBox basis={'42.25%'} objFit={'contain'}  bgColor={'black'}>
                <img src={assets.images.ticketron} alt="cool man"/>
            </GridBox>
            <GridBox basis={'56.75%'}>
                <span style={{minHeight: '50rem'}}></span>
            </GridBox>
            <SRNDtwo><span>S</span><span>R</span><span>N</span><span>D</span></SRNDtwo>
        </GridRow>

        <GridRow>
            <GridBox basis={'42%'}>
            </GridBox>
            <GridBox basis={'58%'}>
                <img src={assets.images.sp} alt="cool man"/>
                <Marquee className="mq" gradient={false} speed={2} direction={'right'} style={{transform: 'rotate(-90deg)', marginTop: '25%', marginLeft: '-20%'}}>
                    The Smashing Pumpkins Music Video &nbsp; &nbsp; &nbsp; &nbsp; The Smashing Pumpkins Music Video &nbsp; &nbsp; &nbsp; &nbsp; The Smashing Pumpkins Music Video &nbsp; &nbsp; &nbsp; &nbsp;
                </Marquee>
            </GridBox>
            <SR><span>S</span><span>R</span></SR>
            <ND><span>N</span><span>D</span></ND>
        </GridRow>
        
    </GridSectionContainer>
  )
}

export default GridSection