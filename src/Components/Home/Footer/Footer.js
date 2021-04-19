import React from "react";

const Footer = () => {
  return (
    <section className="bg-white ">
      <div className="container">
        <div className="row">
          <h1 className="text-center py-5">Get In Touch</h1>
          <div className="col-md-4 ">
            <h4>Dhaka Office:</h4>
            <address>830 N 127th St, Seattle, WA 98133</address>
            <small>Bangladesh</small>
            <p>info@solutionamakersbd.com</p>
          </div>
          <div className="col-md-4">
            <h4>Dhaka Office:</h4>
            <address>830 N 127th St, Seattle, WA 98133</address>
            <small>Bangladesh</small>
            <p>info@solutionamakersbd.com</p>
          </div>
          <div className="col-md-4">
            <h4>Dhaka Office:</h4>
            <address>830 N 127th St, Seattle, WA 98133</address>
            <small>Bangladesh</small>
            <p>info@solutionamakersbd.com</p>
          </div>
        </div>
      </div>
      <footer>
        <p className="bg-secondary text-center py-2">
          Copy Right {new Date().getFullYear()} All Goes To Asikur Rahman Raju
        </p>
      </footer>
    </section>
  );
};

export default Footer;
