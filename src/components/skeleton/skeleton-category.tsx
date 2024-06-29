import {Skeleton} from "@/components/ui/skeleton"

export function SkeletonCategory() {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 rounded-xl border-[1px] border-solid border-indigo-200 bg-white text-black hover:text-white hover:bg-darkblue transition-colors">
      <div className="space-y-2">
        <Skeleton className="h-3 w-[110px]"/>
        <Skeleton className="h-3 w-[90px]"/>
      </div>
    </div>
  )
}