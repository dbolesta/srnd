import styled from 'styled-components'
import images from './../images';

const GridSectionContainer = styled.div`

    padding-bottom: 5rem;

    @media (max-width: 740px) {
        /* font-size: 1rem; */
    }
`;

const GridRow = styled.div`
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    flex-direction: row;
`;

const GridBox = styled.div`
    display: flex;
    overflow: hidden;
    flex: 0 1 ${props => props.basis};
    flex-direction: column;
    background-color: ${props => props.bgColor || 'white'};
    padding: ${props => props.padding || '0'};
    

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
                <img src={images[4]} alt="cool man"/>
            </GridBox>
        </GridRow>

        <GridRow>
            <GridBox basis={'42.25%'} objFit={'contain'}  bgColor={'black'}>
                <img src={images[5]} alt="cool man"/>
            </GridBox>
            <GridBox basis={'56.75%'}>
                <span style={{minHeight: '40rem'}}></span>
            </GridBox>
        </GridRow>

        <GridRow>
            <GridBox basis={'42%'}>
            </GridBox>
            <GridBox basis={'58%'}>
                <img src={images[6]} alt="cool man"/>
            </GridBox>
        </GridRow>
        
    </GridSectionContainer>
  )
}

export default GridSection