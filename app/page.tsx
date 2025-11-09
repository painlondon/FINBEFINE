import { useTranslations } from "next-intl";
import { Hero } from "./_components/hero";
import { SecondSection } from "./_components/secondSection";
import { ThirdSection } from "./_components/thirdSection";

export default function HomePage() {
  return (
    <div className="flex flex-col py-9">
      <Hero />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
