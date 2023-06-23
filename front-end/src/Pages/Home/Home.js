import { Navigate } from "react-router";
import Navigation from "../../components/Navigation/Navigation";
import SideBar from "../../components/SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";

function Home() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <SideBar />
        <div className="d-flex flex-column">
          <Navigation />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default Home;
