import React, { useState } from "react";
import { ServicesData } from "../../Assets/Data/Data";
import ServiceCard from "../../Component/ServiceCard/ServiceCard";
import About from "../About/About";
import { Banner } from "./Banner";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";
import web from "../../Assets/Images/img1.png";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Banner />
      <div
        className="container-fluid px-5"
        data-aos="fade-up"
        style={{ background: "#fafafa" }}
      >
        <div className="row bg-light">
          <LeftDiv
            title="Grow Your Website With Our"
            description="We are the team of talented developer making websites"
            path="/about"
          />
          <RightDiv imgpath={web} />
        </div>
      </div>
      <section className="px-0" id="services">
      
        
          <h2 className="text-center mb-4 section-heading">
            We <span className="span-1">Provide</span>The Best
            <br /> Service With <span  style={{color: "#ff685f"}}>Our Tools</span>
          </h2>
         
          <div className="row service-row p-5">
            {ServicesData.map((v) => {
              const { icon, title, description, path } = v;
              return (
                <ServiceCard
                  icon={icon}
                  title={title}
                  description={description}
                  path={path}
                />
              );
            })}
          </div>
      
 
      </section>

      {/*
      <br />
      <span>{Counter}</span>
      <button onClick={() => Setcolor(Counter + 1)}>+</button>
  <button onClick={() => Setcolor(Counter - 1)}>-</button>*/}
    </>
  );
};

export default Home;
