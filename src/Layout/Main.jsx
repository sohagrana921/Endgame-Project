import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/Navbar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="md:min-h-[calc(100vh-150px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
