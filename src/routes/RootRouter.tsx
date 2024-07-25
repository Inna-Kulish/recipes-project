import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
import { RoutePages } from "./RoutePages";
import SharedLayout from "../components/SharedLayout";

const Home = lazy(() => import("../pages/Home"));

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={RoutePages.Home} element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
