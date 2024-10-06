import React from "react";
import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  PRODUCTS_ROUTE,
} from "./constants/routes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EditProduct from "./pages/products/Edit";

import MainLayout from "./layouts/MainLayout";

import ProductList from "./pages/products/List";
import ProductDetails from "./pages/products/Details";
import AuthLayout from "./layouts/AuthLayout";
import UnAuthLayout from "./layouts/UnAuthLayout";
import AddProduct from "./pages/products/Add";
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        <Route element={<AuthLayout />}>
        
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />

          <Route path={PRODUCTS_ROUTE}>
            <Route index element={<ProductList />} />
            <Route path={":id"} element={<ProductDetails />} />
            <Route path={"add"} element={<AddProduct />} />
            <Route path={"edit/:id"} element={<EditProduct />} />
          </Route>
        </Route>
        <Route element={<UnAuthLayout />}>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;