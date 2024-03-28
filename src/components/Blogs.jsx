import React from "react";
import { blog } from "../Data";

const Blogs = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          our <span>Blog's</span>
        </h1>
        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <a href="#" className="title">Tasty And Refreshing Spices</a>
                <span>by admin / 21st march / 2024</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, excepturi placeat ad culpa et numquam ullam commodi autem assumenda sint labore cumque voluptatem aliquam illo aut esse repellendus ipsam recusandae.</p>
                <a href="#" className="btn">Read More</a>
              </div>

            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
