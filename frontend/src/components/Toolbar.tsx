import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import ChangeLanguage from "./ChangeLanguage";

export const Toolbar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "/login";
  };
  return (
    <div className="container mx-auto border-b border-slate-200 py-2 flex flex-col md:flex-row gap-4 items-center justify-between">
      <ul className="bg-gray-200 py-2 rounded-xl flex items-center gap-4 font-semibold">
        <li>
          <NavLink to={"/"} className="px-4 py-2 .nav-link">
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to={"/history"} className="px-4 py-2 .nav-link">
            History
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-4">
        <ChangeLanguage />
        <div>
          <Button lightRed className="" onClick={handleLogout}>
            {t("logout")}
          </Button>
        </div>
      </div>
    </div>
  );
};
