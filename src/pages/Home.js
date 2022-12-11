import { useState, useEffect, useRef } from "react";
import Header from '../components/Header';
import Header2 from '../components/Header2';
import assets from '../assets';
import Modal from 'react-modal';

import useOnScreen from '../hooks/useOnScreen';
import ImgRow from '../components/ImgRow';
import Show from '../components/Show';
import GridSection from '../components/GridSection';
import BrianAndBrad from '../components/BrianAndBrad';
import Footer from '../components/Footer';
import SRND from '../components/SRND';
import Menu from '../components/Menu';


import styled from 'styled-components';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const ModalInnerStyled = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
  position: relative;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
const ModalInnerLeft = styled.div`
  flex: 1 1 14%;
  text-transform: uppercase;
  flex-direction: column;
  display: flex;

  h1 {
    text-transform: uppercase;
    margin: 0;
    font-size: 3.3rem;

    span {
      color: #489ADA;
      display: inline-block;
      font-size: 3.3rem;
    }
  }

  p {
    text-transform: none;
    font-size: 1.3rem;
  }

  span {
    display: block;
    /* align-self: flex-end; */
    margin-top: auto;
    font-size: 1.3rem;
    cursor: pointer;
  }


`;
const ModalInnerRight = styled.div`
  flex: 1 1 50%;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;

  img {
    max-height: 100%;
    max-width: 100%;
  }
`;




const Home = () => {
    // const [scroll, setScroll] = useState(0);
    let subtitle;

    const [menuOpen, setMenuOpen] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
  
    // const ref = useRef();
    // Call the hook passing in ref and root margin
    // In this case it would only be considered onScreen if more ...
    // ... than 300px of element is visible.
    // const onScreen = useOnScreen(ref, "-30%");
  
    // useEffect(() => {
    //   document.addEventListener("scroll", () => {
    //     const scrollCheck = window.scrollY < 1500
    //     if (scrollCheck !== scroll) {
    //       setScroll(scrollCheck)
    //     }
    //   })
    // });
    useEffect(() => {
      if (menuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'visible'
      }
    }, [menuOpen])
  
  
  
    return (
      <div className="App">
        {menuOpen 
          && 
          <Menu handleClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}/>
        }
        {/* <Header handleClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}/> */}
        <Header2 handleClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}/>
        <ImgRow handleOpenModal={openModal} />
        <Show/>
        <GridSection/>
        <BrianAndBrad/>
        <Footer/>
        <SRND/>
  
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          closeTimeoutMS={200}
        >
          <ModalInnerStyled>
              <button onClick={closeModal}>close</button>
              <ModalInnerLeft>
                <h1>Srnd <span>Archive</span></h1>
                <h2>DIE GESTALTEN, TRES LOGOS, 2006</h2>
                <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed diam nonum- my nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.</p>
                <span>View More here</span>
              </ModalInnerLeft>
              <ModalInnerRight>
                <img src={assets.images.sp} alt="cool man"/>
              </ModalInnerRight>
  
          </ModalInnerStyled>
        </Modal>

      </div>
    );
}

export default Home