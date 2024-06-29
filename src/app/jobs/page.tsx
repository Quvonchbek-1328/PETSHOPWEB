'use client'

import CustomPagination from "@/components/ui/custom-pagination";
import {Input} from "@/components/ui/input";
import {Job} from "@/types";
import {PiListMagnifyingGlassDuotone} from "react-icons/pi";
import {useState} from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import Filter from "@/components/filter";
import JobCard from "@/components/job-card";
import Partners from "@/components/partners/partners";
import {SkeletonCard} from "@/components/skeleton/skeleton-card";


const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoaded, setIsLoaded] = useState(true)
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const usersPerPage = 6;

  return (
    <div className="flex flex-col gap-y-8">
      <div className="py-8 bg-lightblue">
        <div className="flex flex-col gap-y-8 container">
          <h1 className="text-5xl font-semibold text-darkindigo">Ishlar</h1>
          <div className="grid grid-cols-4 gap-x-3 items-center py-4 justify-between">
            <Input
              placeholder="Qidirish..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="max-w-sm col-span-3 md:col-span-4"
            />
            <Sheet>
              <SheetTrigger asChild>
                <Button className="h-10 w-full rounded-md md:hidden flex">
                  <PiListMagnifyingGlassDuotone/>
                </Button>
              </SheetTrigger>
              <SheetContent side={"bottom"} className={"rounded-t-2xl"}>
                <SheetHeader>
                  <SheetTitle>Filtirlash</SheetTitle>
                </SheetHeader>
                <Filter pageNumber={currentPage} pageSize={usersPerPage} setCount={setCount}
                        setCurrentPage={setCurrentPage} setJobs={setJobs} setIsLoaded={setIsLoaded}/>
                <SheetFooter className={"mt-4"}>
                  <SheetClose asChild>
                    <Button type="submit" className={"rounded-xl py-2 px-5"}>Saqlash</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <div className="grid md:grid-cols-6 grid-cols-1 gap-x-4">
            <div className="md:block hidden">
              <Filter
                setJobs={setJobs}
                pageNumber={currentPage}
                pageSize={usersPerPage}
                setCurrentPage={setCurrentPage}
                setCount={setCount}
                setIsLoaded={setIsLoaded}
              />
            </div>
            {isLoaded ? (
              <div className="flex flex-col col-span-5">
                <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 w-full">
                  {Array.from({length: 6}).map((_, index) => (
                    <div className="flex flex-col bg-white rounded-lg shadow-[0_1px_8px_-2px_#2F07E5]" key={index}>
                      <SkeletonCard/>
                    </div>
                  ))}
                </div>
              </div>
              ) : (
              <div className="flex flex-col col-span-5">
                <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 w-full">
                  {jobs
                    ?.filter((user) =>
                      user.title
                        ?.toLowerCase()
                        // .includes(searchTerm.toLowerCase())
                        .replace(/\s+/g, "")
                        .includes(searchTerm.toLowerCase().replace(/\s+/g, ""))
                    )
                    .map((job) => (
                      <JobCard job={job} key={job.id}/>
                    ))}
                </div>
                <div className="flex items-center py-4 justify-end">
                  {count > usersPerPage && (
                    <CustomPagination
                      totalPosts={count}
                      postsPerPage={usersPerPage}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={"mb-8"}>
        <Partners/>
      </div>
    </div>
  );
};

export default Jobs;
