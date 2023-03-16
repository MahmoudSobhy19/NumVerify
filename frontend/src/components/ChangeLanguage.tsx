import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import i18n from "../i18n/config";
import { Button } from "./Button";

const ChangeLanguage = ({ pos }: any) => {
  const { t } = useTranslation();
  document.body.dir = i18n.dir();
  const localLang = localStorage.getItem("lang");

  const changeLang = (event: any) => {
    let lang = event.target.value;
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
    if (lang === "ar") {
      document.body.dir = "rtl";
      document.body.lang = "ar";
    } else {
      document.body.dir = "ltr";
      document.body.lang = "en";
    }
  };

  useEffect(() => {
    const lang = localStorage.getItem("lang") as string;
    i18n.changeLanguage(lang);
    if (lang === "en") {
      document.body.dir = "ltr";
      document.body.lang = "en";
    } else {
      document.body.dir = "rtl";
      document.body.lang = "ar";
    }
  }, []);

  return (
    <div>
      {localLang === "en" ? (
        <Button
          blue
          value={"ar"}
          className="flex items-center gap-2 text-sm"
          onClick={(e) => changeLang(e)}
        >
          <MdLanguage className="text-xl text-white" />
          {t("lang")}
        </Button>
      ) : (
        <Button
          blue
          value={"en"}
          className="flex items-center gap-2 text-sm"
          onClick={(e) => changeLang(e)}
        >
          <MdLanguage className="text-xl text-white" />
          {t("lang")}
        </Button>
      )}
    </div>
  );
};

export default ChangeLanguage;
