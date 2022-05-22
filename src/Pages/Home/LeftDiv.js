import React from "react";
import { Link } from "react-router-dom";
import Button1 from "../../Component/Button/Button1";
function LeftDiv(props) {
  const { title, description } = props;
  return (
    <>
      <div className="col-md-6 py-5 d-flex flex-column justify-content-center mt-5" data-aos="">
        <h1 className="fw-bold">
          {title}
           <strong className="ms-2 span-1">
            SEO Tools <span style={{color:"#fff"}}> and</span> <span className="span-2">Project Management</span>
          </strong>
        </h1>
        <p className="py-3">{description}</p>
        <div className="mt-auto">
        <Button1 title="Get in Touch" path="contact" />
        </div>
      </div>
    </>
  );
}

export default LeftDiv;
