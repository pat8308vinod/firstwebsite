import React from "react";
import "./CommentForm.css";
const CommentForm = () => {
  return (
    <div>
      <div className="reply-form">
        <h4>Leave a Comment</h4>
        <p>
          Your email address will not be published. Required fields are marked *{" "}
        </p>
        <form>
          <div className="row">
            <div className="col-md-6 form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Your Name*"
              />
            </div>
            <div className="col-md-6 form-group">
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="Your Email*"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col form-group">
              <input
                name="website"
                type="text"
                className="form-control"
                placeholder="Your Website"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col form-group">
              <textarea
                name="comment"
                className="form-control"
                placeholder="Your Comment*"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};
export default CommentForm;
