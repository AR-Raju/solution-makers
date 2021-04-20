import React from "react";

const ReviewData = (props) => {
  const { name, imgURL, profession, comment } = props.reviewData;
  return (
    <div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="img-box">
            <img src={imgURL} alt="" />
          </div>
          <p class="testimonial">{comment}</p>
          <p class="overview">
            <b>{name}</b>, {profession}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewData;
