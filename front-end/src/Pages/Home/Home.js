import Navigation from "../../components/Navigation/Navigation";
import SideBar from "../../components/SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";

function Home() {
  return (
    <>
      <div className="d-flex">
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
