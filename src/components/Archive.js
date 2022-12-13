import styled from 'styled-components';
import assets from '../assets';
import Marquee from "react-fast-marquee";

const ShowContainer = styled.div`
    /* overflow: hidden; */
    /* max-height: 40rem; */
    /* height: 100%; */
    position: relative;
    background-color: #FFE9E9;
    /* display: flex;
    align-items: center;
    justify-content: center; */

    .textContainer {
        width: 100%;
        text-align: center;
        padding: 17rem 0;

        h1 {
            font-size: 8vw;
        }

        .coolText {
            background-color: black;
            padding: 10px 20px;
            color: #f6ea72;
        }
    }


    .futureText {
        margin-left: 10%;
        h1 {
            margin: 0;
            font-size: 7vw;
        }

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
        <div className="textContainer">
            <h1><span className="coolText">SRND</span> ARCHIVE 2003-15</h1>
        </div>
        <div className="futureText">
            <h1>WELCOME TO<br/>THE BEGINING<br/>OF THE END.</h1>
        </div>
    </ShowContainer>
  )
}

export default Show