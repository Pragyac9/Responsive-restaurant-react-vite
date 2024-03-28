import React from 'react';
import '../src/assets/css/style.css';

import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Product from './components/Product';
import Review from './components/Review';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Product/>
      <Review/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
