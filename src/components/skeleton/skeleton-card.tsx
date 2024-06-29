import {Skeleton} from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-y-4 p-10">
      <div className="flex flex-row gap-x-2 items-center">
        <Skeleton className="h-12 w-12 rounded-full"/>
        <div className="flex flex-col">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]"/>
            <Skeleton className="h-4 w-[200px]"/>
          </div>
        </div>
      </div>
      <div className={'flex flex-col gap-y-1'}>
        <div className="flex items-center font-bold">
          <Skeleton className="h-4 w-[250px]"/>
        </div>
        <div>
          <Skeleton className="h-4 w-[250px]"/>
        </div>
        <div>
          <Skeleton className="h-4 w-[200px]"/>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex gap-x-2">
          <Skeleton className="h-4 px-5 rounded-xl"/>
          <Skeleton className="h-4 px-5 rounded-xl"/>
        </div>
        <Skeleton className="px-4 py-1.5 rounded-xl"/>
      </div>
    </div>
  )
}