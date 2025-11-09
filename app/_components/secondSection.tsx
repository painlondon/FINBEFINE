import { AnalyticsIcon } from "@/icons/analytics";
import {
  CarDoneIcon,
  GraphIcon,
  ManIcon,
  MoneyIncomeOutlinedIcon,
  PageIcon,
  TurnIcon,
} from "@/icons/homeSecondSectionIcons";
import { CarIcon, HandIcon } from "lucide-react";
import React from "react";

interface SecondSectionBoxInfo {
  icon: React.ReactNode;
  text: string;
}

const secondSectionBoxesData: SecondSectionBoxInfo[] = [
  { text: "Инвестиции", icon: <MoneyIncomeOutlinedIcon /> },
  { text: "Рейтинг МФО", icon: <AnalyticsIcon /> },
  { text: "Автокредит", icon: <CarIcon /> },
  { text: "Рефинанси рование", icon: <TurnIcon /> },
  { text: "Займы без отказа", icon: <HandIcon /> },
  { text: "Кредиты для бизнеса", icon: <PageIcon /> },

  { text: "КАСКО", icon: <CarDoneIcon /> },
  { text: "Банкротство", icon: <ManIcon /> },
  { text: "Рейтинг банков", icon: <GraphIcon /> },
];

export const SecondSectionBox: React.FC<SecondSectionBoxInfo> = ({
  icon,
  text,
}) => {
  return (
    <div className="homeSecondSectionBoxShaddow flex flex-col w-[147px] rounded-[10px] h-[144px] founded-[10px] items-center justify-center">
      {icon}
      <h3 className="text-text text-[15px] font-medium">{text}</h3>
    </div>
  );
};

export const SecondSection = () => {
  return (
    <div className="flex py-12 flex-wrap gap-2">
      {secondSectionBoxesData.map((boxData) => (
        <SecondSectionBox {...boxData} />
      ))}
    </div>
  );
};
