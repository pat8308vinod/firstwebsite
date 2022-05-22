import React, { useState } from "react";
import Button1 from '../../Component/Button/Button1';

function NewsRight() {
  const [email, Setemail] = useState();
  const valideData = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div className="news_right">
        <form onSubmit={valideData} className="d-flex flex-row">
          <input
            type="email"
            placeholder=" Email Address"
            name="email"
            className="form-control me-3"
            required=""
            onChange={(e) => Setemail(e.target.value)}
          />
         <Button1 title="Subscribe" path="contact" />
        </form>
      </div>
    </>
  );
}

export default NewsRight;
