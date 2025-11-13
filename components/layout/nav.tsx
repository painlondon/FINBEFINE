"use client";

import { AppConfig as appConfig } from "@/config/main";
import { ListArrow } from "@/icons/arrows";
import { LinkIcon, MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/tailwind";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "../ui/button";

// nav config
type NavigationPathProps = {
  titleKey: string;
  path: string;
};

const languages = [
  { code: "en", label: "EN", flag: "/flags/en.png" },
  { code: "ru", label: "RU", flag: "/flags/ru.png" },
];

interface LanguageSwitcherProps {
  currentLocale: string;
}

export default function LanguageSwitcher({
  currentLocale,
}: LanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = useState(currentLocale);
  const [open, setOpen] = useState(false);

  const changeLanguage = async (locale: string) => {
    await fetch("/api/set-locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale }),
    });

    setCurrentLang(locale);
    setOpen(false);
    window.location.reload();
  };

  const language = languages.find((l) => l.code === currentLang);

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setOpen(!open)}
        className="px-3 flex gap-1.5 cursor-pointer justify-center items-end py-2 rounded"
      >
        <img className="w-5" src={language?.flag} />
        <p className="text-[10px] leading-2 ">
          {language?.label}
          <div className="inline-flex mx-1">
            <ListArrow />
          </div>
        </p>
      </div>

      {open && (
        <div className="absolute mt-2 w-32 border rounded shadow bg-white z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={cn(
                "block w-full text-left px-3 hover:bg-gray-300 py-2 cursor-pointer",
                { "font-bold": lang.code === currentLang }
              )}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export const Navigation: React.FC<{ local: string }> = ({ local }) => {
  const t = useTranslations("navigation");
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavigationPaths: NavigationPathProps[] = [
    { titleKey: t("loans"), path: "/loans" },
    { titleKey: t("cards"), path: "/cards" },
    { titleKey: t("microloans"), path: "" },
    { titleKey: t("deposits"), path: "" },
    { titleKey: t("insurance"), path: "" },
    { titleKey: t("education"), path: "" },
  ];

  const NavigationPath: React.FC<NavigationPathProps> = ({
    path,
    titleKey,
  }) => {
    return <div className="text-text font-medium text-sm">{titleKey}</div>;
  };

  return (
    <nav className="flex z-20 flex-col gap-8 p-7 max-w-[1440px] w-full">
      <div className="flex gap-5 items-center justify-between">
        <div></div>
        <LanguageSwitcher currentLocale={local} />
      </div>

      <div className="hidden md:flex justify-between items-center w-full">
        <div className="flex w-fit items-center justify-start gap-14">
          <div className="flex gap-2 items-center">
            <img src="/favicon.svg" />
            <h3 className="uppercase text-text text-[24px] font-bold">
              <span className="text-primary">{appConfig.name.slice(4)}</span>
              <span>{appConfig.name.slice(4, appConfig.name.length)}</span>
            </h3>
          </div>
          <div className="bg-background items-center h-9 rounded-[20px] flex gap-2 px-5">
            {NavigationPaths.map((pathInfo) => (
              <NavigationPath key={pathInfo.titleKey} {...pathInfo} />
            ))}
          </div>
        </div>
        <Button variant="default">
          <LinkIcon /> {t("login")}
        </Button>
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-md flex justify-between items-center px-5 py-3 z-40">
        <div className="flex gap-2 items-center">
          <img src="/favicon.svg" className="w-8 h-8" />
          <h3 className="uppercase text-text text-[20px] font-bold">
            <span className="text-primary">{appConfig.name.slice(4)}</span>
            <span>{appConfig.name.slice(4, appConfig.name.length)}</span>
          </h3>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 border rounded-md"
        >
          {mobileOpen ? (
            <XIcon className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed top-[60px] left-0 w-full bg-white z-30 shadow-lg flex flex-col gap-4 p-5">
          {NavigationPaths.map((pathInfo) => (
            <div
              key={pathInfo.titleKey}
              className="py-2 border-b text-sm cursor-pointer"
            >
              {pathInfo.titleKey}
            </div>
          ))}
          <Button variant="default" className="w-full mt-3">
            <LinkIcon /> {t("login")}
          </Button>
        </div>
      )}
    </nav>
  );
};
