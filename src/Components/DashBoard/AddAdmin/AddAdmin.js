import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      email: data.email,
    };
    const url = `https://limitless-tor-93225.herokuapp.com/AddAdmin`;
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
          <h1>Add Admin</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              defaultValue="admin email"
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

export default AddAdmin;
