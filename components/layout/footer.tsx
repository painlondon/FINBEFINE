import { CIcon, PlusIcon, SendIcon, WIcon } from "@/icons/footerIcons";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <div className="w-full flex items-center justify-center bg-[#EDF2F5] ">
      <div className="w-full flex-col lg:flex-row py-8 flex max-w-[1440px] px-2 lg:px-14 justify-between">
        <div className="flex lg:w-[707px] flex-col gap-4 lg:gap-11">
          <div className="flex justify-start items-center gap-1.5">
            <img src="/logo.png" />
            <h3 className="text-xl w-fit font-bold text-center">
              FINBE
              <span className="text-primary w-full text-center">FINE.RU</span>
            </h3>
          </div>

          <div className="flex flex-col max-w-full gap-3 text-text">
            <p>{t("organizationInfo")}</p>
            <h3 className="text-[#5279F4] font-semibold">
              {t("agreementsAndPolicies")}
            </h3>
            <p>{t("companyDetails")}</p>
          </div>
        </div>

        <div className="flex flex-col pt-10 max-w-[550px]">
          <div className="w-full flex gap-3 lg:justify-end">
            <PlusIcon />
            <WIcon />
            <SendIcon />
          </div>

          <div className="flex max-w-[600px] flex-col pt-10 py-4 gap-3">
            <h3 className="text-text font-semibold text-xl">
              {t("supportTitle")}
            </h3>

            <div className="flex gap-4">
              <div className="flex flex-col gap-5">
                <p className="text-text underline">{t("supportEmail")}</p>
                <p className="text-text">{t("supportPhone")}</p>
              </div>
              <p className="text-text max-w-[250px] leading-[26px]">
                {t("supportAddress")}
              </p>
            </div>

            <div className="flex flex-col py-5 gap-6">
              <p className="text-text">{t("workingHours")}</p>

              <div className="flex w-full justify-between">
                <p className="text-text">
                  <div className="inline-flex">
                    <CIcon />
                  </div>
                  {t("copyright")}
                </p>

                <div className="border-[#6C6C6C] flex items-center justify-center text-xl text-[#6C6C6C] border rounded-full w-[47px] h-[47px]">
                  16+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
