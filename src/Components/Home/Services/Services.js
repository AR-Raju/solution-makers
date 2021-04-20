import React, { useContext, useEffect, useState } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import { faDesktop, faCode, faTh } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Services = () => {
  // const services = [
  //   {
  //     name: "Software Development",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi?",
  //     icon: faDesktop,
  //   },
  //   {
  //     name: "Web Development",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi?",
  //     icon: faCode,
  //   },
  //   {
  //     name: "App Development",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi?",
  //     icon: faTh,
  //   },
  // ];
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newService, setNewService] = useState([]);

  useEffect(() => {
    fetch("https://limitless-tor-93225.herokuapp.com/AddService")
      .then((res) => res.json())
      .then((data) => setNewService(data));
  }, []);

  return (
    <section className="bg-white">
      <div className="container">
        <h1 className="text-center py-3">WHAT WE OFFER</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          incidunt officiis eligendi tenetur hic sint laboriosam molestias,
          veniam aliquid quod?
        </p>
        <div className="row">
          {newService.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
