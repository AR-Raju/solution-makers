import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ServiceDetails = (props) => {
  const { name, description, _id } = props.service;
  return (
    <div className="col-md-3 ms-5 my-5 border">
      <div className="ps-2 py-2">
        <div className="d-flex justify-content-start">
          {/* <FontAwesomeIcon style={{ fontSize: "1.5em" }} icon={service.icon} /> */}
          <h5 className="ps-3">{name}</h5>
        </div>
        <div>
          <ul>
            <li>{description}</li>
            <li>{description}</li>
            <li>{description}</li>
          </ul>
        </div>
        <Link to={`/SelectedService/${_id}`}>
          <button className="btn btn-primary">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
