import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function FLink() {
  return (
    <>
      <div>
        <h4><span className="span-1">Useful</span><span className="span-2">Links</span></h4>
        <ul className="f_ul text-white">
          <li>
          <Link to="/"><i className="fa fa-angle-right me-1"></i>Home</Link>
          </li>
          <li>
          <Link to="/about"><i className="fa fa-angle-right me-1"></i>About</Link>
          </li>
          <li>
          <Link to="/career"><i className="fa fa-angle-right me-1"></i>Career</Link>
          </li>
          <li>
          <Link to="/services"><i className="fa fa-angle-right me-1"></i>Terms of Services</Link>
          </li>
          <li>
          <Link to="/policy"><i className="fa fa-angle-right me-1"></i>Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FLink;
