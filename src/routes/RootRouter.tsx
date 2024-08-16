import { Route, Routes, useLocation } from "react-router-dom";
import React, { lazy, useEffect } from "react";
import { RoutePages } from "./RoutePages";
import SharedLayout from "../components/SharedLayout";
import RecipesPage from "../pages/RecipesPage";
import RecipeDetailsPage from "../pages/RecipeDetailsPage";

const Home = lazy(() => import("../pages/Home"));

const RootRouter: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
  <Routes>
    <Route path={RoutePages.Home} element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path={RoutePages.Recipes} element={<RecipesPage />} />
      <Route path={RoutePages.Details} element={<RecipeDetailsPage/>} />
    </Route>
  </Routes>
)};

export default RootRouter;
