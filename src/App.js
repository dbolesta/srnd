import styled from 'styled-components';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Project from './pages/Project';
import NotFound from './pages/NotFound';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:name" element={<Project />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
