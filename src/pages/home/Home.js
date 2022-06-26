import React from "react";

import "./home.css";
import AccordionPage from "../accordionPage/accordionPage";
import Sidebar from "../../components/sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { ROUTE_ACCORDION } from "../../constants";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="main_container">
        <Router>
          <Switch>
            <Route
              exact
              path={ROUTE_ACCORDION}
              render={() => <AccordionPage />}
            />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default Home;
