import React from "react";
import { ServicesData } from "../../Assets/Data/Data";
import "./Services.css";
import ServiceCard from "../../Component/ServiceCard/ServiceCard";
function Services() {
  return (
    <>
      <section className="mb-5 service-section">
        <div className="container py-5">
          <h2 className="text-center mb-5 fw-bold"><span className="span-1">Our</span> <span className="span-2">Services</span></h2>
          <div className="row">
            {ServicesData.map((v) => {
              const {icon,title,description,path} = v
              return <ServiceCard  icon={icon} title={title} description={description} path={path}/>;
            })}
          </div>
        </div>
      </section>
      

    </>
  );
}

export default Services;
