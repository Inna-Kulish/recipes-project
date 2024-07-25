import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const SharedLayout: React.FC = () => {
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
