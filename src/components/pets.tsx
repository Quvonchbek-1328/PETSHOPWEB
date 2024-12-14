"use client"

import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {Pet} from "@/types";
import {getTopPets} from "@/store/api";
import {SkeletonCard} from "@/components/skeleton/skeleton-card";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import PetCard from "@/components/pet-card";

const Pets = () => {
  const [pet, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true)
  const router = useRouter();

  // this is not best practice bro, 
  useEffect(() => {
    getTopPets().then(
      (data) => {
        setPets(data);
        setLoading(false);
      }
    )
  }, []);

  return (
    <div className="bg-lightblue">
      <div className="container py-8 flex flex-col gap-y-8">
        <h1 className="text-center font-roboto sm:text-5xl text-4xl font-semibold">
          <span className="text-darkblue">Top</span> PetS
        </h1>
        {loading ? <div className={"grid grid-cols-3 gap-4"}>
          {
            Array.from({length: 3}).map((_, index) => (
              <div key={index} className={"flex flex-col bg-white rounded-lg shadow-[0_1px_8px_-2px_#2F07E5]"}>
                <SkeletonCard/>
              </div>
            ))
          }
        </div> : (
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {pets.map((pet, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <PetCard pet={pet}/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
        <div className="flex items-center justify-center">
          <Button
            variant={"outline"}
            className="sm:px-5 px-2 sm:py-3 py-1 font-roboto sm:text-lg text-base rounded-xl"
            onClick={() => router.push("/jobs")}
          >
            Batafsil...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pets;
