import styled from 'styled-components';

const AboutTextContainer = styled.div`
    margin: 5rem;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 2rem;
    color: #e5e5e5;
    max-width: 1200px;
    width: 100%;
    text-align: center;
    padding: 2rem;

    @media (max-width: 740px) {
        font-size: 1rem;
    }
`;

const StyledWorkSelectorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 9rem;
    margin-bottom: -2rem;

    span {
        font-size: 4rem;
        border: 5px solid #e5e5e5;
        padding: 1rem 1.25rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color: #e5e5e5;
            color: #141414;
        }

        @media (max-width: 740px) {
            font-size: 1.25rem;
            border: 2px solid #e5e5e5;
        }
    }
`;

const About = ({innerRef}) => {
  return (
    <AboutTextContainer ref={innerRef}>
        <p>Our in-house post production and visual effects facility is used to push the boundaries of creativity through conceptual thinking and inventive techniques. It's in our post process where we use technology and talent to raise questions, design solutions and shape the answers that manifest our initial ideas.</p>

        <StyledWorkSelectorContainer>
            <span>Music</span>
            <span>Commercial</span>
        </StyledWorkSelectorContainer>
    </AboutTextContainer>
  )
}

export default About