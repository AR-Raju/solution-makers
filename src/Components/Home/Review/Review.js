import React, { useEffect, useState } from "react";
import "./Review.css";
import aliza from "../../../images/aliza.png";
import ema from "../../../images/ema.png";
import wilson from "../../../images/wilson.png";
import ReviewData from "../ReviewData/ReviewData";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://limitless-tor-93225.herokuapp.com/ReviewForm")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-5">
      <div class="container-xl">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Testimonials</h2>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              {/* Carousel indicators  */}
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              {/* Wrapper for carousel items  */}
              {reviews.map((review) => (
                <ReviewData reviewData={review}></ReviewData>
              ))}

              {/* <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="img-box">
                    <img src={wilson} alt="" />
                  </div>
                  <p class="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    eu sem tempor, varius quam at, luctus dui. Mauris magna
                    metus, dapibus nec turpis vel, semper malesuada ante. Idac
                    bibendum scelerisque non non purus. Suspendisse varius nibh
                    non aliquet.
                  </p>
                  <p class="overview">
                    <b>Paula Wilson</b>, Media Analyst
                  </p>
                </div>
                <div class="carousel-item">
                  <div class="img-box">
                    <img src={ema} alt="" />
                  </div>
                  <p class="testimonial">
                    Vestibulum quis quam ut magna consequat faucibus.
                    Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus
                    dictum risus. Pellentesque viverra sagittis quam at mattis.
                    Suspendisse potenti. Aliquam sit amet gravida nibh,
                    facilisis gravida odio.
                  </p>
                  <p class="overview">
                    <b>Antonio Ema</b>, Web Developer
                  </p>
                </div>
                <div class="carousel-item">
                  <div class="img-box">
                    <img src={aliza} alt="" />
                  </div>
                  <p class="testimonial">
                    Phasellus vitae suscipit justo. Mauris pharetra feugiat ante
                    id lacinia. Etiam faucibus mauris id tempor egestas. Duis
                    luctus turpis at accumsan tincidunt. Phasellus risus risus,
                    volutpat vel tellus ac, tincidunt fringilla massa. Etiam
                    hendrerit dolor eget rutrum.
                  </p>
                  <p class="overview">
                    <b>Michael Holz</b>, Seo Analyst
                  </p>
                </div>
              </div> */}
              {/* Carousel controls  */}
              <a
                class="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i class="fa fa-angle-left"></i>
              </a>
              <a
                class="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i class="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
