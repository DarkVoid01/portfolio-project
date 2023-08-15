import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import MarqueeComp from './components/Marquee/MarqueeComp';
import Home from './pages/Home/Home';
import Cursor from './components/Cursor/Cursor.jsx';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path = "/contact" element = {<Contact/>} /> 
      <Route path = "/projects" element = {<Projects/>} />
      <Route path = "/about" element = {<About/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
