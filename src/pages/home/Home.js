import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Router>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className="main_container " id={isOpen ? "slide_toggle" : ""}>
          <div className="main_block">
          <Switch>
            <Route
              exact
              path={ROUTE_ACCORDION}
              render={() => <AccordionPage />}
            />
          </Switch>
          </div>
         
        </div>
      </Router>
    </div>
  );
};

export default Home;
