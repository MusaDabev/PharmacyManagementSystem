import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";

function Home() {
  return (
    <>
      <NavBar />
      <div className="d-flex">
        <SideBar />
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
