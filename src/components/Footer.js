import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #FFE9E9;
    color: black;
    padding: 1rem;

    h1 {
        margin: 6rem auto;
        font-size: 5rem;
        font-weight: 300;
    }


    @media (max-width: 740px) {
        font-size: 1rem;
    }
`;

const Blurb = styled.div`
    margin-bottom: 2rem;



    p { 
        margin: 0;
        margin-bottom: 0.25rem; 
        font-size: 1.2rem;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const Footer = () => {
  return (
    <FooterContainer >
        <Blurb>
            <p>You have reached the end.</p>
            <p>We hope your visit was thrilling.</p>
            <p>Remeber.</p>
            <p>Every experience leads to something new and exciting.</p>
        </Blurb>

        <Blurb>
            <p>To enter the Instagram</p>
            <p>Please, email only at Info@srndstudios.com</p>
            <p>If you really want to call 7186288484</p>
        </Blurb>

        <Blurb>
            <p>Thank you!</p>
        </Blurb>


        <h1>©SRND 2022</h1>
    </FooterContainer>
  )
}

export default Footer