"use client"

import { Pet } from "@/types";
import {useRouter} from "next/navigation";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

const PetCard = ({pet}: {pet: Pet}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[0_1px_8px_-2px_#2F07E5]">
      <div className="flex flex-col gap-y-4 p-6">
        <div className="flex flex-row font-roboto gap-x-2 items-center">
          <Avatar>
            <AvatarImage src="/job.svg" alt={pet.title}/>
            <AvatarFallback>{pet.title.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-xl font-bold leading-none text-darkindigo">
              {pet.title}
            </span>
          </div>
        </div>
        <div className={'flex flex-col gap-y-1'}>
          <div className="flex items-center font-bold">
            <span className="text-darkindigo">{pet.price} so&apos;m</span>{" "}
            <span className="text-orange-400">/Oy</span>
          </div>
          <div>
              <span className="text-base leading-none font-normal text-gray-600">
                                  {pet.district.region.name} {pet.district.name}
                                </span>
          </div>
          <div>
                        <span className="text-base leading-none font-normal text-gray-600">
                            {pet.minAge} - {pet.maxAge} yosh
                        </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-2">
            <Badge className="px-5">{pet.gender === "Male" ? "Erkak" : pet.gender === "Female" ? "Ayol" : "Unknown"}</Badge>
            <Badge className="px-5">{pet.petCategory.title}</Badge>
          </div>
          <Button
            className="px-4 py-1.5 rounded-xl text-sm font-semibold"
            onClick={() => router.push(`/jobs/${pet.id}`)}
          >
            Ko&apos;rish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
