import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';

const StyledProjectHolder = styled.div`
    width: ${props => props.size || '100px'};
    height: ${props => props.size || '100px'};
    background-color: ${props => props.bg || 'red'};
`;


const StyledPHolder = styled.div`
    position: absolute;
    inset: ${props => props.inset};
`;

const StyledProjectImg = styled.img`
    width: ${props => props.size}vw;

    @media (max-width: 740px) {
        width: ${props => props.size * 1.75}vw;
    }
`;

const ParallaxProjectHolder = ({start, end, inset, bg, size, img}) => {
  return (
    <StyledPHolder inset={inset}>
        <Parallax translateY={[start, end]}>
            {img ? 
                <StyledProjectImg src={img} size={size}/>
                : 
                <StyledProjectHolder bg={bg} size={size}/>
            }
        </Parallax>
    </StyledPHolder>
  )
}

export default ParallaxProjectHolder
