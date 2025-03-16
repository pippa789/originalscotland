import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Nav from './components/Nav';
import About from './About';
import Gallery from './components/Gallery';
import Footer from './components/footer';

function App() {
  
  return (

   <Router>
     <Nav/>
    
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/About" element={<About />} />
     <Route path="/Gallery" element={<Gallery />} />
     </Routes>
     <Footer/>
   </Router>
      
  );

}

export default App;
