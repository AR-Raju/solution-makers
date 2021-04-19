import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            SOLUTION MAKERS
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">
                  Service
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="/dashboard/selectedService">
                  Admin
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            {loggedInUser.email ? (
              <Link className="mr-2" to="/addProducts">
                {loggedInUser.name}
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary mx-2">login</button>
              </Link>
            )}

            <button className="btn btn-primary">register</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
