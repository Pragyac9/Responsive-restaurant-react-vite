import React from 'react'

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-pinterest"></a>
        <a href="#" className="fab fa-linkedin"></a>
      </div>
      <div className="links">
        <a href="#Home">Home</a>
        <a href="#about">about us</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#blogs">blogs</a>
        <a href="#review">review's</a>
        <a href="#contact">contact-us</a>
      </div>
      <div className="credit">
        created by <span>pragya chauhan</span> | All Right's Reserved
      </div>
    </section>
  );
}

export default Footer