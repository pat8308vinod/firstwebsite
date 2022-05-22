import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleBlog.css";
import CommentForm from "../../Component/CommentForm/CommentForm";
import BlogSidebar from "./BlogSidebar";
const SingleBlog = () => {
  // https://b2bnetworkservices.online/blogs/public
  const { name } = useParams();
  const [data, SetData] = useState({});
  useEffect(() => {
    axios
      .get(`https://b2bnetworkservices.online/blogs/public/${name}`)
      .then((respons) => {
        respons.data.blog.map((v) => SetData(v));
      });
  }, [name]);

  return (
    <div className="py-4" data-aos="fade-up">
      <section classname="">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <article className="single_blog">
                <div className="">
                  <img className="img-fluid" src={data.coverImg} />
                </div>
                <div className="blog-meta py-4">
                  <div className="row">
                    <div className="col-8">
                      <ul>
                        <li className="d-flex align-items-center">
                          <i className="fa fa-user"></i>{" "}
                          <Link to="">{data.author}</Link>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="fa fa-clock-o"></i>{" "}
                          <Link to="">
                            <time datetime="2020-01-01">
                              {data.publishDate}
                            </time>
                          </Link>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="fa fa-eye"></i>{" "}
                          <Link to="">{data.views}</Link>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="fa fa-thumbs-up"></i>{" "}
                          <Link to="">{data.likes}</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="single_blog_title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="blog-footer">
                  <i className="fa fa-folder"></i>
                  <ul className="cats ms-2">
                    <li className="blog-cats">
                      <Link to="">{data.category}</Link>
                    </li>
                  </ul>
                </div>
              </article>
              <CommentForm />
            </div>
            <div className="col-md-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default SingleBlog;
