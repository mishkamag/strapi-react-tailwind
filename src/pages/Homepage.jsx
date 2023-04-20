import React from "react";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

const Homepage = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs ? blogs : ""} />
      <Footer />
    </div>
  );
};

export default Homepage;
