import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleBlog from "../components/SingleBlog";

const BlogDetails = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <SingleBlog blogs={blogs ? blogs : ""} />
      <Footer />
    </div>
  );
};

export default BlogDetails;
