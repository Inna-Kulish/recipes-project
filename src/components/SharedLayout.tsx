import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const SharedLayout: React.FC = () => (
  <>
    <Header />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default SharedLayout;
