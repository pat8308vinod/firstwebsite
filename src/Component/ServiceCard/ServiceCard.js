import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard(props) {
    const  { title, icon, description, path } = props;

  return (
    <>
      <div className="col-md-3 col-sm-6" data-aos="fade-up">
        <div className="item d-flex flex-column">
          <p className="text-center icon">{icon}</p>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="mt-auto">
            <Link to={path} className="r_more">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
