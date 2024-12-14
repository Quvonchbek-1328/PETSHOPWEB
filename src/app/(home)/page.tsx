import Hero from "@/components/hero";
import Partners from "@/components/partners/partners";
import Pets from "@/components/pets";
import Sellers from "@/components/sellers";
import Categories from "@/components/categories";
import Feedbacks from "@/components/feedbacks";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <Hero/>
      <Partners/>
      <Pets/>
      <Sellers/>
      <Categories/>
      <Feedbacks/>
      <Faq/>
    </div>
  );
}
