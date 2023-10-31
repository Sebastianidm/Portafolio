import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Default = () => {
  return (
    <div className="bg-slate-800  max-h-100 h-screen ">
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Default;
