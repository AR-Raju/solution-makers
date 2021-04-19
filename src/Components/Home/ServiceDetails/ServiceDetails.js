import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  return (
    <div className="col-md-3 ms-5 my-5 border">
      <div className="ps-2 py-2">
        <div className="d-flex justify-content-start">
          <FontAwesomeIcon style={{ fontSize: "1.5em" }} icon={service.icon} />
          <h5 className="ps-3">{service.name}</h5>
        </div>
        <div>
          <ul>
            <li>{service.description}</li>
            <li>{service.description}</li>
            <li>{service.description}</li>
          </ul>
        </div>
        <Link to={`/dashboard/selectedService`}>
          <button className="btn btn-primary">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
