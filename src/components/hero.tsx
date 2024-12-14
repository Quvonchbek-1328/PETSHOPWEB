"use client"

import Image from "next/image";
import {Button} from "./ui/button";
import {useRouter} from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="mt-8 flex py-3 container">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-col gap-y-12 lg:basis-1/2 basis-full">
          <h2 className="lg:text-5xl sm:text-5xl text-4xl font-bold font-roboto">
            Imkoniyatlarga mos keladigan<br/>
            <span className="text-darkblue">“PetSHop“</span> platformasiga <br/>
            Xush kelibsiz
          </h2>
          <span className="sm:text-base text-sm font-roboto">
            Siz o&apos;z uy hayvongizni topmqchimiszi? bu platfroma aynan siz .
          </span>
          <div className="flex flex-row sm:gap-x-6 gap-x-3">
            <Button variant={'fill'}
                    className="sm:px-5 px-3 sm:py-4 py-2 rounded sm:text-base text-sm font-semibold"
                    onClick={() => router.push('/contact')}>Xaridorlarni qoshish</Button>
            <Button variant={'outline'}
                    className="sm:px-5 px-3 sm:py-4 py-2 rounded sm:text-base text-sm font-semibold"
                    onClick={() => router.push('/contact')}>SOtuvchi  sifatida
              pul ishlash</Button>
          </div>
        </div>
        <div className="basis-1/2 lg:block hidden">
          <Image
            src="/heroImage.jpg"
            alt=""
            // className="w-[700px] h-[546px] object-cover"
            width={700}
            height={546}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
