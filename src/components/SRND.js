import styled from "styled-components";


const SRNDContainer = styled.div`

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: #FFE9E9;

    span {
        color: #f6ea72;
        padding: 0.25rem;
        font-weight: 700;
        font-size: 8rem;
    }

    @media (max-width: 740px) {
        /* font-size: 1rem; */
    }
`;



const SRND = () => {
  return (
    <SRNDContainer>
        <span>S</span>
        <span>R</span>
        <span>N</span>
        <span>D</span>
    </SRNDContainer>
  )
}

export default SRND