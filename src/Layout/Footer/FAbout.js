import React from "react";

function FAbout() {
  return (
    <>
      <h4 className="fw-bold" style={{color:"#03a4ed"}}>About <span className="span-1">LeadTronics</span></h4>
      <p>
        LeadTronics is a tech-enabled digital marketing solutions provider, and
        create custom strategies for our clients as per their goals and needs.
      </p>
      <p>
        <a>
          <i className="fa fa-youtube me-1 social_icon"></i>
        </a>
        <a>
          <i className="fa fa-facebook me-1 social_icon"></i>
        </a>
        <a>
          <i className="fa fa-instagram me-1 social_icon"></i>
        </a>
        <a>
          <i className="fa fa-linkedin me-1 social_icon"></i>
        </a>
        <a>
          <i className="fa fa-envelope me-1 social_icon"></i>
        </a>
      </p>
    </>
  );
}

export default FAbout;
