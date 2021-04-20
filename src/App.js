import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AddAdmin from "./Components/DashBoard/AddAdmin/AddAdmin";
import AddService from "./Components/DashBoard/AddService/AddService";
import Dashboard from "./Components/DashBoard/Dashboard/Dashboard";
import ReviewForm from "./Components/DashBoard/ReviewForm/ReviewForm";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NoMatch from "./Components/NoMatch/NoMatch";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/ReviewForm">
            <ReviewForm></ReviewForm>
          </Route>
          <Route path="/AddService">
            <AddService></AddService>
          </Route>
          <Route path="/AddAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <PrivateRoute path="/dashboard/SelectedService">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/SelectedService/:id">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route to="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
