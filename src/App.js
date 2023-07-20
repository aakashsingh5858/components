import "./App.css";
import Routers from "./routes/Routers";
import "./assets/css/globalStyle.css";
import Loader from "./components/loader/Loader";


function App() {
  return (
    <div className="App">
      <Routers />
      <Loader />
    </div>
  );
}

export default App;
