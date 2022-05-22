import React from "react";
import FAbout from "./FAbout";
import FContacs from "./FContacs";
import FCopyright from "./FCopyright";
import FLink from "./FLink";
import "./Footer.css";
import FServies from "./FServies";
import NewsLeft from "./NewsLeft";
import NewsRight from "./NewsRight";

function Footer(props) {

  const {myFunction} = props;
  return (
    <footer
      className="footer_main py-3 main"
      style={{ width: "100%" }}
    >
      <div className="container mb-5" data-aos="fade-down">
        
        <h2 className="fw-bold py-4 text-center news-h2"><span className="span-1">Our</span> NewsLetter</h2>
        <div className="row news">
          <div className="col-md-6 col-sm-12"><NewsLeft /></div>
          <div className="col-md-6 col-sm-12"><NewsRight /></div>   
        </div>
      </div>
      <hr className="mb-5"></hr>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6"><FLink /></div>
          <div className="col-lg-3 col-md-6"><FServies/></div>
          <div className="col-lg-4 col-md-6"><FContacs /></div>
          <div className="col-lg-3 col-md-6"><FAbout /></div>
        </div>
      </div>
      <hr></hr>
      <div className="container">
           <FCopyright />
      </div>
  
    </footer>
  );
}

export default Footer;
