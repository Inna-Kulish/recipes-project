import { Route, Routes } from "react-router-dom";
import React, { lazy } from "react";
import { RoutePages } from "./RoutePages";
import SharedLayout from "../components/SharedLayout";
import Recipes from "../pages/Recipes";

const Home = lazy(() => import("../pages/Home"));

const RootRouter: React.FC = () => (
  <Routes>
    <Route path={RoutePages.Home} element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path={RoutePages.Recipes} element={<Recipes/>} />
    </Route>
  </Routes>
);

export default RootRouter;
