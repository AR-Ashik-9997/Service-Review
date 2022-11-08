import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import './CustomStyle.css';
const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
