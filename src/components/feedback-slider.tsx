"use client";

import {useEffect, useState} from "react";
import {Feedback} from "@/types";
import {getFeedbacks} from "@/store/api";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {Card, CardFooter, CardHeader} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {format} from "date-fns";

const FeedbacksSlider = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  useEffect(() => {
    getFeedbacks().then((data) => {setFeedbacks(data)});
  }, [])
  return (
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
        {feedbacks?.map((f) => (
          <CarouselItem key={f.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="2xl:h-52 xl:h-60 h-72 flex flex-col justify-between">
                <CardHeader>
                  <span className="text-gray-600">
                    {f.message}
                  </span>
                </CardHeader>
                <CardFooter className="gap-x-2">
                  <Avatar>
                    <AvatarImage
                      src=""
                      alt={f.fullName.charAt(0)}
                    />
                    <AvatarFallback>{f.fullName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col leading-none">
                    <span className="font-semibold">{f.fullName}</span>
                    <span className="text-sm text-gray-600">Sana: {format(f.dueDate, 'dd-MM-yyyy')}</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default FeedbacksSlider;
