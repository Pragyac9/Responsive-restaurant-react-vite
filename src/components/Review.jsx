import React from 'react'
import { review } from '../Data';
import quoteImg from "../assets/images/quote-img.png";

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          Customer's <span>Review</span>
        </h1>
        <div className="box-container">
          {review.map((item, index) => (
            <div className="box">
              <img src={quoteImg} alt="" className="quote" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium neque non error nihil ex veniam, ratione mollitia,
                qui, eligendi perspiciatis facilis delectus dolores ab enim.
              </p>
              <img src={item.img} alt=""  className='user'/>
              <h3>John Doe</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Review