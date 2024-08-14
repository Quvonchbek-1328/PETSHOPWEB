import Hero from "@/components/hero";
import Partners from "@/components/partners/partners";
import Jobs from "@/components/jobs";
import Workers from "@/components/workers";
import Categories from "@/components/categories";
import Feedbacks from "@/components/feedbacks";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <Hero/>
      <Partners/>
      <Jobs/>
      <Workers/>
      <Categories/>
      <Feedbacks/>
      <Faq/>
    </div>
  );
}
