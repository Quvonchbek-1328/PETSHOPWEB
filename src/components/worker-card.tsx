'use client'

import {useRouter} from "next/navigation";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Worker} from "@/types";
import {calculateAge} from "@/lib/utils";

const WorkerCard = ({worker}: {worker: Worker}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-[0_1px_8px_-2px_#2F07E5]">
      <div className="flex flex-col gap-y-4 p-6">
        <div className="flex flex-row font-roboto gap-x-2 items-center">
          <Avatar>
            <AvatarImage src="/worker.svg" alt={worker.title}/>
            <AvatarFallback>{worker.title.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-2xl font-bold leading-none text-darkindigo">
              {worker.title}
            </span>
          </div>
        </div>
        <div className={'flex flex-col gap-y-1'}>
          <div className="flex items-center font-bold">
            <span className="text-darkindigo">{worker.salary} so&apos;m</span>{" "}
            <span className="text-orange-400">/Oy</span>
          </div>
          <div>
                            <span className="text-base leading-none font-normal text-gray-600">
                                  {worker.district.region.name} {worker.district.name}
                                </span>
          </div>
          <div>
                        <span className="text-base leading-none font-normal text-gray-600">
                             {calculateAge(worker.birthDate)} yosh
                        </span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-2">
            <Badge className="px-5">{worker.gender === "Male" ? "Erkak" : worker.gender === "Female" ? "Ayol" : "Unknown"}</Badge>
            <Badge className="px-5">{worker.jobCategory.title}</Badge>
          </div>
          <Button className="px-4 py-1.5 rounded-xl text-sm font-semibold"
                  onClick={() => router.push(`/workers/${worker.id}`)}>
            Ko&apos;rish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
