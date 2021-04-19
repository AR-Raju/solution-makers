import React from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import { faDesktop, faCode, faTh } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      name: "Software Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi?",
      icon: faDesktop,
    },
    {
      name: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi?",
      icon: faCode,
    },
    {
      name: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi?",
      icon: faTh,
    },
  ];
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
          {services.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
