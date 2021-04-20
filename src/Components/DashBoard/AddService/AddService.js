import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      description: data.description,
    };
    const url = `https://limitless-tor-93225.herokuapp.com/AddService`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server site responding", res));
  };

  return (
    <div>
      <div className="container-fluid row bg-primary h-100">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5 ps-5">
          <h1>Add Service</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="name"
              defaultValue="service name"
              ref={register}
              className="my-3"
            />
            <br />

            <input
              name="description"
              defaultValue="service description"
              ref={register}
              className="my-3"
            />
            <br />
            <input className="my-3" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
