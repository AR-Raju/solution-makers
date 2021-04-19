import React from "react";
import "./Skill.css";
import html from "../../../images/html.png";
import css from "../../../images/css.png";
import js from "../../../images/js.png";
import react from "../../../images/react.png";

const Skill = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="row">
          <div className="border ms-5 col-md-4 my-5">
            <h4 className="py-3">Our values</h4>
            <ol>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ol>
          </div>
          <div className="ms-5 border col-md-6 my-5">
            <h4 className="py-3">Our Skills</h4>
            <div className="image py-3">
              <img className="ml-5" src={html} alt="" />
              <img className="ml-5" src={react} alt="" />
              <img className="ml-5" src={js} alt="" />
              <img className="ml-5" src={css} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
