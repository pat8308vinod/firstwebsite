import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../BlogCard/BlogCard";
import "./LatestBlogSlider.css";
const LatestBlogSlider = () => {
  const [data, SetData] = useState([]);
  useEffect(() => {
    axios
      .get("https://b2bnetworkservices.online/blogs/public")
      .then((respons) => {
        SetData(respons.data.blogs);
      });
  }, []);

  const items = [
    <div className="row">
      {data?.slice(0, 3).map((v) => {
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
    </div>,
    <div className="row">
      {data?.slice(0, 3).map((v) => {
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
    </div>,
    <div className="row">
      {data?.slice(3, 6).map((v) => {
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
    </div>,
    <div className="row">
      {data?.slice(6, 9).map((v) => {
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
    </div>,
  ];
  return (
    <div>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlayInterval={3000}
        autoPlay={true}
        infinite={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
      />
    </div>
  );
};
export default LatestBlogSlider;
