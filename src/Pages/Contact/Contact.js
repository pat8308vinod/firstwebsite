import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import Button1 from "../../Component/Button/Button1";
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <section id="contact" className="contact">
      <h2 className="text-center contact-heading d-flex align-items-center justify-content-center fw-bold">
              <span className="span-1">Contact</span>
              <span className="span-2 ml-3">Us</span>
            </h2>
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
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <p className="text-center">
              Please fill the below quick form and we will be touch with in
              lightening Speed.
            </p>
          </div>

          <div
            className="row mt-5 mb-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="fa fa-map"></i>
                    <h3>Our Address</h3>
                    <p>Kharadi Pune</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="fa fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      <a href="mailto:abc@gmail.com">info@gmail.com</a>
                      <br />
                      <a href="mailto:abc@gmail.com">contact@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="fa fa-phone"></i>
                    <h3>Call Us</h3>
                    <p>
                      <a href="tel: 890765434">+19 890765434</a>
                      <br />
                      <a href="tel: 890765434">+19 890765434</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                action=""
                className="php-email-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      {...register("firstName", {
                        required: true,
                        maxLength: 5,
                      })}
                    />
                    {errors.firstName?.type === "required" &&
                      "First name is required"}
                    {errors.firstName?.type === "maxLength" &&
                      "name should be less than 5 letters"}
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      {...register("email", {
                        required: true,
                        pattern: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
                      })}
                    />
                    {errors.email?.type === "required" &&
                      "First name is required"}
                    {errors.email?.type === "pattern" &&
                      "email should be formated correctely"}
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group">
                    <select className="form-control" {...register("city")}>
                      <option value="not selected">Select city</option>
                      <option value="pune">Pune</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="nashik">Nashik</option>
                    </select>
                  </div>
                  <div className="col form-group">
                    <input className="" type="radio" {...register("gender")} />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                    <input
                      className="ms-1"
                      type="radio"
                      {...register("gender")}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    {...register("subject", {
                      required: true,
                    })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    {...register("message")}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Contact;
