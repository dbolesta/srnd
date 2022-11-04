import Page from './components/old/Page';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxProjectHolder from './components/old/ParallaxProjectHolder';
import BackgroundTitle from './components/old/BackgroundTitle';
import { useState, useEffect, useRef } from "react";
import About from './components/old/About';
import Header from './components/Header';
import images from './images';

import useOnScreen from './hooks/useOnScreen';
import ImgRow from './components/ImgRow';
import Show from './components/Show';
import GridSection from './components/GridSection';
import BrianAndBrad from './components/BrianAndBrad';
import Footer from './components/Footer';
import SRND from './components/SRND';
import Menu from './components/Menu';


function App() {
  // const [scroll, setScroll] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

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




  return (
    <div className="App">
      {/* <ParallaxProvider> */}
      {menuOpen 
        && 
        <Menu handleClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}/>
      }
      <Header handleClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen}/>
      <ImgRow/>
      <Show/>
      <GridSection/>
      <BrianAndBrad/>
      <Footer/>
      <SRND/>
      {/* </ParallaxProvider> */}
    </div>
  );
}

export default App;
