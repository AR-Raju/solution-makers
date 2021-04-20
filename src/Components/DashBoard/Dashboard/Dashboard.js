import React from "react";
import { useParams } from "react-router";

import SelectedService from "../SelectedService/SelectedService";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className="container-fluid row bg-primary h-100">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-5">
          <SelectedService></SelectedService>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
