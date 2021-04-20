import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SelectedService = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("https://limitless-tor-93225.herokuapp.com/SelectedService/" + id)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  //   console.log(product);
  console.log(service);
  console.log(id);

  return (
    <div className="ms-5">
      <h1>Selected service</h1>
      <h4>Service name: {service.name}</h4>
      <p>Service description: {service.description}</p>
    </div>
  );
};

export default SelectedService;
