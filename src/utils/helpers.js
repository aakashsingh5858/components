import { ACCORDION, ROUTE_ACCORDION, ROUTE_HOME } from "../constants";

export const getPageTitle = (path = "") => {
    switch (path) {
        case ROUTE_ACCORDION:
            return ACCORDION ;
        case ROUTE_HOME:
            return "Home";
        default:
          return "No Component"
    }
}