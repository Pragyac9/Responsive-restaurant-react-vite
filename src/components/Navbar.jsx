import React, { useRef } from "react";
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";

const Navbar = () => {
  // ------for adding searchbar whenever we click on search icon-------
  const searchRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  //   -------for showing cart items-------------
  const cartRef = useRef();
  const cartHandler = () => {
    searchRef.current.classList.remove("active");
    cartRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
  };

  // ----for showing navbar in hamburger icon when device open in small devices----------
  const navbarRef = useRef();
  const navbarhandler = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove("active");
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#blogs">blogs</a>
          <a href="#review">review's</a>
          <a href="#contact">contact-us</a>
        </nav>
        <div className="icons">
          <div
            className="fa-solid fa-magnifying-glass"
            onClick={searchHandler}
          ></div>
          <div className="fas fa-shopping-cart" onClick={cartHandler}></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarhandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search here..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>Cart item 01</h3>
                <div className="price">$15.99</div>
              </div>
            </div>
          ))}

          <a className="btn" href="#">
            <span className="btn-text">Checkout Now</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Navbar;
// -- useref is used to take the refrence of the parcticular tag
