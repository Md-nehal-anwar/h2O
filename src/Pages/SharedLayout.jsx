import React from "react";
import { Outlet } from "react-router";
import Menu from "../Components/FinalHeader/Menu";

export default function SharedLayout() {
  return (
    <>
      <div className="">
        <Menu />
        <Outlet />
      </div>
    </>
  );
}
