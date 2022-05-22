import React from "react";
import { Link } from "react-router-dom";
function FServies() {
  return (
    <>
      <h4><span className="span-1">Services</span></h4>
      <ul className="f_ul">
        <li>
        <Link to="/services"> <i className="fa fa-angle-right me-1"></i>Web Development</Link>
        </li>
        <li>
        <Link to="/services"> <i className="fa fa-angle-right me-1"></i>Mobile App Development</Link>
        </li>
        <li>
        <Link to="/services"> <i className="fa fa-angle-right me-1"></i>Digital Marketing</Link>
        </li>
        <li>
        <Link to="/services"> <i className="fa fa-angle-right me-1"></i>Demand Generation</Link>
        </li>
      </ul>
    </>
  );
}

export default FServies;
