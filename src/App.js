
import './App.css';
import React  from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Practice from './components/Practice';
import Attorneys from './components/Attorneys';

import Footer from './components/Footer';
import Details from './components/Details';

import Request from './components/Request';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
       <Route  path='/' element={<Home />} />
       <Route  path='/about' element={<About />} />
       <Route  path='/practice' element={<Practice />} />
       <Route  path='/attorneys' element={<Attorneys />} />
       
      
       <Route  path='/detail' element={<Details />} />
       <Route  path='/request' element={<Request />} />
      
       
       </Routes>
       <Footer/>
       </Router>
       </div>

    
    
   
  );
}

export default App;
