import React from "react";
import "./BlogCard.css";
import { Link } from "react-router-dom";
const BlogCard = (props) => {
  const { cimg, title, author, dcreate, category} = props;

  return (
    <div className="col-md-4 col-sm-6 mt-3 aos-init aos-animate" data-aos="fade-up">
      <div className="card">
        <img src={cimg} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column">
          <Link to={`/blog/${title}`}>
            <h5 className="card-title">{title}</h5>
          </Link>

          <div className="flex-row d-flex justify-content-between mb-4">
            <div className="text-left text-muted">{author}</div>
            <div className="text-right text-muted cdate">{dcreate}</div>
          </div>

          <div className="flex-row d-flex justify-content-between mt-auto">
            <Link to={`/blog/${title}`} className="btn button-62 mt-auto">
              {category}
            </Link>

            <Link to={`/blog/${title}`} className="btn button-33 mt-auto text-white">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
