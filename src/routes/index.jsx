import React from "react";
import { useStateValue } from "../context";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/layout";
import Login from "../pages/login/login";
import NotFound from "../pages/not-found/NotFound";
const Router = () => {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </>
  );
};

export default Router;
