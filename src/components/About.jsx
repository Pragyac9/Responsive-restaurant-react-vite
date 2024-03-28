import React from 'react'
import AboutImg from "../assets/images/about-img.jpg";

const About = () => {
  return (
    <>
    <section className="about" id="about">
        <h1 className="heading">
            <span>About</span> Us
        </h1>
        <div className="row">
            <div className="image">
                <img src={AboutImg} alt="" />
            </div>
            <div className="content">
                <h3>What Makes Our Food Special</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam quae, libero corrupti totam accusantium illum, cupiditate distinctio, harum dolorum numquam aspernatur eum ipsum illo. Beatae.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ex aliquid velit magni error nostrum.</p>
                <a href="#" className='btn'>Learn More</a>
            </div>
        </div>
    </section>
    
    
    
    
    
    </>
  )
}

export default About