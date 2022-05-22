import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import "./BlogSidebar.css";
import { Link, to } from "react-router-dom";
const BlogSidebar = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [data, SetData] = useState([]);
  useEffect(() => {
    axios
      .get("https://b2bnetworkservices.online/blogs/public")
      .then((response) => {
        SetData(response.data.blogs);
      });
  }, []);

  const videoCategories = data
    .map((v) => v.category)
    .filter((item, index, array) => {
      return array.indexOf(item) === index;
    });

  console.log(videoCategories);
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item.title)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <div className="blog-sidebar">
      <sidebar>
        <h3 className="sidebar-title">Search</h3>
        <div className="sidebar-item search-form">
          <form action="">
            <input
              icon="search"
              type="search"
              placeholder="Search Blog"
              onChange={(e) => searchItems(e.target.value)}
            />
          </form>
        </div>
        <h3 className="sidebar-title">Categories</h3>
        <div className="sidebar-item">
          <ul className="sidebar-cat p-0">
            {videoCategories.map((v) => {
              return (
                <Link to="">
                  <li>{v}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-item">
          <h3 className="sidebar-title">Recent Posts</h3>
          <div>
            <div className="row">
              <div className="card" itemsPerRow={3} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                  filteredResults.map((item) => {
                    return (
                      <div className="col-12">
                        <div className="row">
                          <div className="col-4">
                            <img src={item.coverImg} className="b-img" alt="" />
                          </div>
                          <p className="col-8">{item.title}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="row">
                    {data.slice(0, 3).map((item) => {
                      return (
                        <div className="col-12">
                          <div className="row">
                            <div className="col-4">
                              <img
                                src={item.coverImg}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <p className="col-8">{item.title}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </sidebar>
    </div>
  );
};
export default BlogSidebar;
