import { useTranslations } from "next-intl";
import { Hero } from "./_components/hero";
import { SecondSection } from "./_components/secondSection";
import { ThirdSection } from "./_components/thirdSection";
import { FourthSection } from "./_components/fourthSection";
import { FifthSection } from "./_components/fifthSection";
import { SeventhSection } from "./_components/seventhSection";

export default function HomePage() {
  return (
    <div className="flex relative max-w-[1440px] flex-col py-9">
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SeventhSection />
    </div>
  );
}
