"use client";
import { Button } from "@/components/ui/button";
import {
  FirstIcon,
  FourthIcon,
  SecondIcon,
  ThirdIcon,
} from "@/icons/fifthSection";
import { cn } from "@/lib/tailwind";
import { useState } from "react";

export interface FifthSectionCardInfo {
  topText: string;
  icon: React.ReactNode;
  description: string;
  values: { key: string; values: string }[];
}

const tabsData: { tab: string; items: FifthSectionCardInfo[] }[] = [
  {
    tab: "Кредиты",
    items: [
      {
        icon: <FirstIcon />,
        topText: "Кредит для реализацию любых Ваших планов",
        description: "Кредит со сниженным платежом",
        values: [
          { key: "Сумма", values: "от 30 тыс. до 5 млн." },
          { key: "Ставка", values: "27.5 - 35.4%" },
          { key: "Срок", values: "13 - 60 мес." },
        ],
      },
      {
        icon: <SecondIcon />,
        topText: "Кредит за 5 минут",
        description: "Наличными без залога (с безопасной доставкой карты)",
        values: [
          { key: "Сумма", values: "до 5 млн." },
          { key: "Ставка", values: "29.9 - 38.5%" },
          { key: "Срок", values: "12 - 60 мес." },
        ],
      },
      {
        icon: <ThirdIcon />,
        topText: "Получите деньги уже сегодня",
        description: "Наличными (онлайн заявка)",
        values: [
          { key: "Сумма", values: "до 30 млн." },
          { key: "Ставка", values: "18.8 - 46.99%" },
          { key: "Срок", values: "12 - 180 мес." },
        ],
      },
      {
        icon: <FourthIcon />,
        topText: "Выгодные условия!    ",
        description: "Кредит на любые цели онлайн",
        values: [
          { key: "Сумма", values: "до 30 млн." },
          { key: "Ставка", values: "24.9%" },
          { key: "Срок", values: "3 - 60 мес." },
        ],
      },
    ],
  },
  { tab: "Вклады", items: [] },
  { tab: "Дебетовые карты", items: [] },
  { tab: "Кредитные карты", items: [] },
  { tab: "Инвестиции", items: [] },
  { tab: "Бизнес", items: [] },
];

export const FifthSectionCard: React.FC<FifthSectionCardInfo> = ({
  description,
  icon,
  topText,
  values,
}) => {
  return (
    <div className="flex flex-col max-w-[332px] relative items-center">
      <div className="bg-[#10A26F] px-6 py-3 text-center text-white flex items-center justify-center  rounded-[5px] translate-y-4 w-[290px] h-[54px] z-20 ">
        {topText}{" "}
      </div>
      <div className="bg-[#F2F2F2]  flex justify-center w-[332px] h-[180px] z-10 rounded-[10px] items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col ">
        <div className="py-2 border-b min-h-[70px] border-b-[#EEEEEE]">
          <p className="font-medium ">{description}</p>
        </div>
        <div className="py-5 flex flex-col gap-2">
          {values.map((val) => (
            <div className="flex w-full justify-baseline">
              <p className="font-semibold">{val.key}</p>
              <p className="font-semibold">{val.values}</p>
            </div>
          ))}
        </div>
        <Button className="w-full" variant="primary">
          Подать заявку
        </Button>
      </div>
    </div>
  );
};

export const FifthSection = () => {
  const [selectedTab, setSelectedTab] = useState(tabsData[0].tab);

  return (
    <div className="flex flex-col ">
      <h3 className="text-[24px] font-semibold">Лучшие предложения месяца</h3>
      <div className="flex gap-2 py-6">
        {tabsData.map((tab) => (
          <div
            onClick={() => setSelectedTab(tab.tab)}
            className={cn(
              "flex px-3 py-2 border-b cursor-pointer font-semibold border-b-[#EEEEEE]",
              {
                "text-primary cursor-default border-b-primary border-b-2":
                  selectedTab === tab.tab,
              }
            )}
          >
            {tab.tab}
          </div>
        ))}{" "}
      </div>
      <div className="flex gap-2">
        {tabsData
          .find((tab) => tab.tab === selectedTab)
          ?.items.map((itemInfo) => (
            <FifthSectionCard {...itemInfo} />
          ))}
      </div>
    </div>
  );
};
