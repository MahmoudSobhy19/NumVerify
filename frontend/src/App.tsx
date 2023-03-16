import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Toolbar } from "./components/Toolbar";
import { Login } from "./pages/Login";
import { Home } from "./pages/RequireAuth";
import { NotFound } from "./pages/NotFound";
import { History } from "./pages/History";

export const App: React.FC = () => {
  const RedirectToApp: React.FC = () => {
    if (localStorage.getItem("isLoggedIn") === "true")
      window.location.href = "/";
    return <Outlet />;
  };

  return (
    <div>
      <Routes>
        <Route element={<RedirectToApp />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="history" element={<History />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="flex" dir="ltr">
      <div className="flex-1 px-5">
        <Toolbar />
        <Outlet />
      </div>
    </div>
  );
};
