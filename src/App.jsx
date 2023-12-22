import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mobiles from './components/Mobiles';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import Signup from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
function App() {
  return (
    
    <Router>
      
      <div>
         <Navbar/>   
         
        <Routes>
          <Route path="/products/:category" element={<Mobiles />} />
          <Route path="/imageslider/:id" element={<ImageSlider />} />
          <Route path="/" element={<Mobiles />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Login/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
