"use client";
import { Button } from "@/components/ui/button";
import {
  AccountIcon,
  FiveIcon,
  LocationIcon,
  MessagingIcon,
} from "@/icons/nenethSection";
import { cn } from "@/lib/tailwind";
import { useMemo, useState } from "react";

type CardInfo = {
  title: string;
  description: string;
  date: string;
};

const cardsInfo: CardInfo[] = [
  {
    title: "В этом банке ты клиент с большой буквы",
    description:
      "На данный момент банк придерживается политики максимальной прозрачности в предоставлении своих услуг,каждая услуга ...",
    date: "15.05.2025",
  },

  {
    title: "В этом банке ты клиент с большой буквы",
    description:
      "На данный момент банк придерживается политики максимальной прозрачности в предоставлении своих услуг,каждая услуга описана подробно и доходчиво, если происходит списание за определенную услугу, у вас есть ...",
    date: "15.05.2025",
  },

  {
    title: "В этом банке ты клиент с большой буквы",
    description:
      "На данный момент банк придерживается политики максимальной прозрачности в предоставлении своих услуг,каждая услуга описана подробно и доходчиво, если происходит списание за определенную услугу, у вас есть ...",
    date: "15.05.2025",
  },

  {
    title: "В этом банке ты клиент с большой буквы",
    description:
      "На данный момент банк придерживается политики максимальной прозрачности в предоставлении своих услуг,каждая услуга описана подробно и доходчиво, если происходит списание за определенную услугу, у вас есть возможность отключить ее и вернуть деньги, и это на уровне ИИ, без участия оператора.Также в альфа банке регулярно появляются ...",
    date: "15.05.2025",
  },

  {
    title: "В этом банке ты клиент с большой буквы",
    description:
      "На данный момент банк придерживается политики максимальной прозрачности в предоставлении своих услуг,каждая услуга описана подробно и доходчиво, если происходит списание за определенную услугу, у вас есть ...",
    date: "15.05.2025",
  },

  {
    title: "В этом банке ты клиент с большой буквы",
    description:
      "На данный момент банк придерживается политики максимальной прозрачности в предоставлении своих услуг,каждая услуга описана подробно и доходчиво, если происходит списание за определенную услугу, у вас есть ...",
    date: "15.05.2025",
  },
  {
    title: "В этом банке ты клиент с большой буквы",
    description:
      "На данный момент банк придерживается политики максимальной прозрачности в предоставлении своих услуг,каждая услуга описана подробно и доходчиво, если происходит списание за определенную услугу, у вас есть ...",
    date: "15.05.2025",
  },
];

const tabsData: { tab: string; items: CardInfo[] }[] = [
  {
    tab: "Банки",
    items: cardsInfo,
  },

  { tab: "МФО", items: [] },
  { tab: "Инвестиции", items: [] },
];

const BanksCard = () => {
  return (
    <div className="flex flex-col rounded-[10px] gap-8 w-[453px] h-[231px] py-4 bg-primary">
      <div className="flex justify-between w-full px-6 py-4 ">
        <div className="flex text-white flex-col gap-2">
          <h3 className="text-xl">
            Банков:{" "}
            <span className="text-3xl font-medium leading-[26px]">313</span>
          </h3>
          <h3 className="text-xl">
            Отзывов:{" "}
            <span className="text-3xl font-medium leading-[26px]">
              2 439 110
            </span>
          </h3>
        </div>
        <MessagingIcon />
      </div>
      <p className="text-white p-5 underline text-xl ">
        Читать все отзывы о банках
      </p>
    </div>
  );
};

export const ReviewCard = () => {
  return (
    <div className="flex lightShadow flex-col w-[299px]  justify-between py-7 h-[244px] rounded-[10px] p-4">
      <h3 className="text-text text-[24px] font-semibold ">Оставьте отзыв</h3>
      <p className="font-medium text-[#6C6C6C] leading-[26px] ">
        Помогите другим пользователям выбрать лучший банк
      </p>
      <Button variant="primary">Написать отзыв</Button>
    </div>
  );
};

const Card: React.FC<CardInfo & { className: string }> = ({
  date,
  className,
  description,
  title,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5 lightShadow h-fit rounded-[10px] p-6",
        className
      )}
    >
      <div className="flex justify-between">
        <h3 className="leading-[26px] max-w-[290px] font-semibold">{title}</h3>
        <img src="/home/a.png" className="w-[50px] h-[50px] rounded-full" />
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-medium text-[15px] leading-[26px]">{description}</p>
        <p className="text-primary">Читать полностью</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="text-[#6C6C6C]">{date}</p>
        <div className="flex gap-3">
          <h3>
            <span className="inline-flex ">
              <AccountIcon />
            </span>{" "}
            Михаил
          </h3>
          <h3>
            <span className="inline-flex ">
              <LocationIcon />
            </span>
            Москва
          </h3>
        </div>
        <div className="flex gap-3 items-center">
          <p className="text-[12px] text-[#6C6C6C]">Оценка</p>
          <FiveIcon />
        </div>
      </div>
    </div>
  );
};

export const NinethSection = () => {
  const [selectedTab, setSelectedTab] = useState(tabsData[0].tab);
  const selectedTabItems =
    useMemo(
      () => tabsData.find((tab) => tab.tab === selectedTab)?.items,
      [selectedTab, tabsData]
    ) || [];
  return (
    <div className="flex flex-col py-7 ">
      <h3 className="text-[24px] font-semibold">Отзывы</h3>
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
      <div className="flex gap-3.5 flex-wrap max-w-full">
        {<Card className="w-[453px]" {...selectedTabItems[0]} />}
        {<Card className="w-[453px]" {...selectedTabItems[1]} />}
        {<Card className="w-[453px]" {...selectedTabItems[2]} />}
        <BanksCard />
        {<Card className="w-[912px]" {...selectedTabItems[4]} />}
        {<Card className="w-[453px]" {...selectedTabItems[5]} />}
        {<Card className="w-[595px]" {...selectedTabItems[6]} />}

        <ReviewCard />
      </div>
    </div>
  );
};
