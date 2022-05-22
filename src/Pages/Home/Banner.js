import React from "react";
import { Link } from "react-router-dom";
import Button1 from "../../Component/Button/Button1";

export const Banner = () => {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
          <div class="row">
            <div class="col-xl-12">
              <h1>
                Get the <span className="span-1"> Best ideaa </span>
                <br />
                for <span className="span-2">your websites</span>
              </h1>
              <h2>
                We are team of talented designers making websites with Bootstrap
              </h2>

              <Button1 title="Get Started" path="about" />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};
