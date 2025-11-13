import { useTranslations } from "next-intl";
import { ServicesSection } from "./_components/secondSection";
import { ThirdSection } from "./_components/thirdSection";
import { ExchangeRatesSection } from "./_components/fourthSection";
import { FifthSection } from "./_components/fifthSection";
import { SeventhSection } from "./_components/seventhSection";
import { NinethSection } from "./_components/ninethSection";
import { TenSection } from "./_components/tenSection";
import { ElevenSection } from "./_components/elevenSection";
import { TwelevSection } from "./_components/twelevSection";
import { BankProductsSection } from "./_components/eighthSection";
import { Hero } from "./_components/hero";

export default function HomePage() {
  return (
    <div className="flex relative max-w-[1440px] flex-col py-9 px-2">
      <Hero />
      {/* <ServicesSection />
      <ThirdSection />
      <ExchangeRatesSection />
      <FifthSection />
      <SeventhSection />
      <BankProductsSection />
      <NinethSection />
      <TenSection />
      <ElevenSection />
      <TwelevSection /> */}
    </div>
  );
}
