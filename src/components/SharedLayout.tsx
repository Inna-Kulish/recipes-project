import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
