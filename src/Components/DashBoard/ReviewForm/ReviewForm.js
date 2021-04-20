import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const ReviewForm = () => {
  const { register, handleSubmit } = useForm();

  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      imageURL: imageURL,
      comment: data.comment,
      profession: data.profession,
    };
    const url = `https://limitless-tor-93225.herokuapp.com/ReviewForm`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server site responding", res));
  };
  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "a2ef7b72158ccce1b07bf3dc534e6da0");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container-fluid row bg-primary h-100">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 ps-5">
          <h1>Review Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              defaultValue="user name"
              ref={register}
              className="my-3"
            />
            <br />
            <input
              name="comment"
              defaultValue="user comment"
              ref={register}
              className="my-3"
            />
            <br />
            <input
              name="profession"
              defaultValue="user profession"
              ref={register}
              className="my-3"
            />
            <br />
            <input
              name="exampleRequired"
              type="file"
              onChange={handleImageUpload}
            />
            <br />
            <input className="my-3" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
