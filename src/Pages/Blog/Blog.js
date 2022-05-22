import React from "react";
import BlogCard from "../../Component/BlogCard/BlogCard";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Blog.css";

const Blog = () => {
  const [data, SetData] = useState([]);
  const [getb, SetBlog] = useState(6);
  useEffect(() => {
    axios
      .get("https://b2bnetworkservices.online/blogs/public")
      .then((respons) => {
        SetData(respons.data.blogs);
      });
  }, []);
  function getmore() {
    SetBlog(getb + 3);
  }
  function getless() {
    SetBlog(getb - 3);
  }
  return (
    <>
      <section className="mb-5">
        <h2 className="text-center mb-4 blog-heading d-flex align-items-center justify-content-center">
          Our{" "}
          <span style={{ color: "#03a4ed" }} className="ms-1">
            Blog
          </span>
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
        <div className="container">
          <div className="row">
            {data?.slice(0, getb).map((v) => {
              return (
                <BlogCard
                  key={v.title}
                  cimg={v.coverImg}
                  title={v.title}
                  author={v.author}
                  dcreate={v.publishDate}
                  path={v.path}
                  category={v.category}
                  _id={v._id}
                />
              );
            })}
          </div>
          <div className="d-flex justify-content-center mt-4 getmore">
            {data.length === getb ? (
              <button onClick={getless} className="button-2">
                See Less
              </button>
            ) : (
              <button onClick={getmore} className="button-2">
                See More
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
