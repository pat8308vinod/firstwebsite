import React from "react";
import LeftDiv from "../Home/LeftDiv";
import RightDiv from "../Home/RightDiv";
import "./About.css";
import web2 from "../../Assets/Images/aboutimg.jpg";
import LatestBlogSlider from "../../Component/Slider/LatestBlogSlider";
const About = () => {
  return (
    <>
      <div className="main-about py-5">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row text-white fw-bold">
            <LeftDiv
              title="Grow Your Bussiness With"
              description="We are the team of talented developer making websites"
              path="/about"
            />
           
          </div>
        </div>
      </div>
      <section className="slider px-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4 mt-5 fw-bold">
            <span className="span-1">Latest</span>
            <span className="span-2"> Blogs</span>
          </h2>
          <LatestBlogSlider />
        </div>
      </section>
        


<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </>
  );
};

export default About;
