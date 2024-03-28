import React from 'react'


const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          Contact <span>us</span>
        </h1>
        <div className="row">
          <iframe className='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.298037632164!2d77.3661027!3d28.5908345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce531108069ef%3A0xe82290be10f8c97c!2sBon%20Bon%20Pastry%20Shop!5e0!3m2!1sen!2sin!4v1711621521797!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <form>
            <h3>get in touch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now"  className='btn'/>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact