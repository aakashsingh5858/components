import "./App.css";
import Routers from "./routes/Routers";
import "./assets/css/globalStyle.css";
import Loader from "./components/loader/Loader";
import Sidebar from "./components/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ROUTES from "./routes/Contstants";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const sidebarExpand = useSelector((state) => state?.sideBar?.isOpen);
  return (
    <div className="App">
      {pathname !== ROUTES.LOGIN && <Sidebar />}

      <div
        style={{
          marginLeft: sidebarExpand
            ? "var( --sidebar-active)"
            : "var(--sidebar-inactive)",
          transition: ".5s",
        }}
        className={`${pathname === ROUTES.LOGIN ? "main" : ""} `}
      >
        <Routers />
      </div>
      <Loader />
    </div>
  );
}

export default App;
