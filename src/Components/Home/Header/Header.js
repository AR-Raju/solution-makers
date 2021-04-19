import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import About from "../About/About";
import Skill from "../Skill/Skill";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div className="header-background">
      <Navbar></Navbar>
      <div className="textStyle">
        <h1>Welcome To Solution Makers BD </h1>
        <small>We provide your business solution</small>
      </div>
      <Services></Services>
      <About></About>
      <Skill></Skill>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Header;
