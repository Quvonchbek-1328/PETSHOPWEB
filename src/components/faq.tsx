"use client"

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {useEffect, useState} from "react";
import {FAQ} from "@/types";
import {getFaqs} from "@/store/api";

const Faq = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([])

  useEffect(() => {
    getFaqs().then(
      data => {
        setFaqs(data)
      }
    )
  }, []);

  return (
    <div className="bg-lightblue">
      <div className="container py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto text-3xl font-semibold">
          Tez-tez so&apos;raladigan savollar
          (<span className="text-darkblue">F.A.Q.</span>)
        </h1>
        <Accordion type="single" collapsible className="w-full xl:px-56 lg:px-40 sm:px-20 px-0">
          {faqs.map((faq) => (
              <AccordionItem value={faq.id} key={faq.id}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <div className="border-l-2 border-darkblue pl-4">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>
    </div>
  );
};
export default Faq;
