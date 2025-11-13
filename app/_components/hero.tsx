import { useTranslations } from "next-intl";
import {
  CalculatorIcon,
  DotsIcon,
  HouseKeyIcon,
  IncomeAnalyticsIcon,
  HouseIcon,
  MoneyIcon,
  Rectangle,
  WalkingIcon,
  BoxMiddleLine,
} from "@/icons/heroIcons";

const FirstBox = () => {
  const t = useTranslations("hero");

  return (
    <div className="bg-[#C6D5DF] rounded-[10px] w-full lg:w-1/2  h-[240px] p-5 heroBoxShaddow flex flex-col gap-2">
      <div className="flex gap-1.5 items-center">
        <MoneyIcon />
        <h3 className="font-semibold leading-5 text-[#171717] text-[32px]">
          {t("deposits")}
        </h3>
      </div>
      <p className="font-medium text-[#171717] text-[18px]">
        {t("findBestRate")}
      </p>
    </div>
  );
};

const SecondBox = () => {
  const t = useTranslations("hero");

  return (
    <div className="bg-[#EDF2F5] pr-12 rounded-[10px] heroBoxShaddow w-full lg:w-1/2 h-[240px] px-3 flex flex-col gap-2 p-5">
      <div className="flex gap-1.5   laptop:justify-end items-center">
        <HouseIcon />
        <h3 className="font-semibold leading-5 text-[#171717] text-[32px]">
          {t("mortgage")}
        </h3>
      </div>
      <p className="font-medium text-[#171717] w-full laptop:text-end text-[13px]">
        {t("oneApplicationNineBanks")}
      </p>
    </div>
  );
};

const ThirdBox = () => {
  const t = useTranslations("hero");

  return (
    <div className="heroThirdBoxSecondGradient heroBoxShaddow h-full relative z-10 rounded-[5px]">
      <img
        className="absolute  hidden lg:block z-20 bottom-0 left-[47%] h-[672px] min-w-[885px] -translate-x-1/2"
        src="/home/person-img.png"
      />
      <div className="heroThirdBoxFirstGradient w-full h-full absolute rounded-[5px] z-30"></div>
      <div className=" p-6 lg:p-10 w-full lg:w-[718px] relative gap-3 h-full z-40 rounded-[10px] flex flex-col">
        <IncomeAnalyticsIcon />
        <div></div>
        <h3 className="text-3xl lg:text-[40px] leading-[100%] font-bold text-white">
          {t("bestFinancial")}{" "}
          <span className="inline">
            <DotsIcon />
          </span>{" "}
          {t("productsIn")}{" "}
          <span className="text-primary-800">{t("moscow")}</span>
        </h3>
        <p className="text-lg lg:text-xl leading-[100%] font-medium text-white">
          {t("compareFinancialProducts")}
        </p>
        <div className="w-[31px] rounded-full absolute top-[10%] right-7 h-[31px] border-white border-opacity"></div>
        <div className="absolute bottom-[40px] right-[35px] ">
          <Rectangle />
        </div>
      </div>
    </div>
  );
};

const FourthBox = () => {
  const t = useTranslations("hero");

  return (
    <div className="flex heroBoxShaddow rounded-[10px] w-full lg:w-[325px] min-h-[488px] lg:min-h-fit lg:h-full p-4 gap-1 relative heroFourthBoxGradient">
      <WalkingIcon />
      <h3 className="text-text-normal  leading-[26px]  text-[24px] font-semibold">
        {t("travelInsurance")}
      </h3>
      <img
        src="/home/heroFourthBoxImg.png"
        className="absolute  bottom-0 w-[180px] lg:w-[237px] lg:h-[482px] right-0"
      />
      <div className="absolute left-0 top-3 w-[325px] max-w-full">
        <BoxMiddleLine />
      </div>
    </div>
  );
};

const FifthBox = () => {
  const t = useTranslations("hero");

  return (
    <div className="fifthBoxGradient mt-6 lg:mt-0 min-h-[240px] rounded-[10px] relative py-4 flex items w-full lg:w-[325px] gap-2 items-end justify-center">
      <h3 className="font-semibold text-[24px]">{t("calculators")}</h3>
      <CalculatorIcon />
      <img src="/home/fifthBoxImg.png" className="absolute left-0 -top-12" />
    </div>
  );
};

const SixthBox = () => {
  const t = useTranslations("hero");

  return (
    <div className="flex h-full min-h-[488px] lg:min-h-fit  rounded-[10px] p-4 gap-1 relative heroSixthBoxGradient">
      <HouseKeyIcon />
      <h3 className="text-text-normal w-[165px] leading-[26px] text-[24px] font-semibold">
        {t("mortgageInsurance")}
      </h3>
      <img
        src="/home/heroSixthBoxImg.png"
        className="absolute  bottom-0 right-0"
      />
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 relative h-[588px]">
      <div className="flex flex-col gap-3 relative">
        <div className="flex flex-col lg:flex-row h-fit relative gap-3">
          <FirstBox />
          <SecondBox />
        </div>
        <ThirdBox />
      </div>
      <FourthBox />
      <div className="flex flex-col gap-3">
        <FifthBox />
        <SixthBox />
      </div>
    </div>
  );
};
