import {Check, ChevronsUpDown} from "lucide-react";
import React, {SetStateAction, useEffect, useState} from "react";
import {JobCategory, District, Job, Region, Worker} from "@/types";
import {Input} from "@/components/ui/input";
import {
  getAllJobsFiltered, getAllWorkersFiltered,
  getCountFilteredJobs, getCountFilteredWorkers,
  getDistrictsByRegionId,
  getJobCategories,
  getRegions
} from "@/store/api";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem} from "@/components/ui/command";
import {cn} from "@/lib/utils";


interface FilterProps {
  setWorkers?: (workers: SetStateAction<Worker[]>) => void,
  setJobs?: (jobs: SetStateAction<Job[]>) => void,
  pageNumber: number,
  pageSize: number,
  setCount: (value: (((prevState: number) => number) | number)) => void,
  setCurrentPage: (value: (((prevState: number) => number) | number)) => void
  setIsLoaded: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const DebouncedInput: React.FC<{
  placeholder: string;
  onChange: (value: string) => void;
  delay: number;
}> = ({placeholder, onChange, delay}) => {
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) {
      clearTimeout(timer);
    }
    const value = event.target.value;
    setTimer(setTimeout(() => onChange(value), delay));
  };

  return <Input placeholder={placeholder} onChange={handleChange}/>;
};

const Filter = ({setWorkers, setJobs, pageNumber, pageSize, setCount, setCurrentPage, setIsLoaded}: FilterProps) => {
  const [openc, setOpenc] = useState(false);
  const [valuec, setValuec] = useState("");
  const [openr, setOpenr] = useState(false);
  const [opend, setOpend] = useState(false);
  const [valued, setValued] = useState("");
  const [allCategory, setAllCategory] = useState<JobCategory[]>([]);
  const [district, setDistrict] = useState<District[]>([]);
  const [valuer, setValuer] = useState("");
  // const [count, setCount] = useState(0)
  const [regions, setRegions] = useState<Region[]>([]);
  const [params, setParams] = useState(new Map<string, string>())
  const [currentGender, setCurrentGender] = useState("")

  useEffect(() => {
    getJobCategories().then((categories) => setAllCategory(categories));
    getRegions().then((regions) => setRegions(regions));
  }, []);

  useEffect(() => {
    if (valuer) {
      getDistrictsByRegionId(
        regions.find((region) => region.name.toLocaleLowerCase() === valuer)
          ?.id || ""
      ).then((districts) => setDistrict(districts));
    }
  }, [valuer]);

  useEffect(() => {
      if (params.has("pageNumber") && params.has("pageSize")) {
        if (setJobs) {
          getAllJobsFiltered(params)
            .then((jobs) => {
              setJobs(jobs)
              setIsLoaded(false)
            })
          getCountFilteredJobs(params)
            .then(count => {
              setCount(count)
            })
        }
        if (setWorkers) {
          getAllWorkersFiltered(params)
            .then((workers) => {
              setWorkers(workers)
              setIsLoaded(false)
            })
          getCountFilteredWorkers(params)
            .then(count => {
              setCount(count)
            })
        }
      }
    }, [params]
  );

  useEffect(() => {
    putParams("pageNumber", pageNumber.toString())
  }, [pageNumber]);

  function putParams(key: string, value: string) {
    if (!params.has("pageSize")) {
      params.set("pageSize", pageSize.toString())
    }
    if (key !== "pageNumber") {
      params.set("pageNumber", "1")
      setCurrentPage(1)
    }
    const newMap: Map<string, string> = new Map(params);
    if (value.length > 0) {
      newMap.set(key, value);
    } else {
      if (params.has(key)) {
        newMap.delete(key);
      }
    }
    setParams(newMap)
  }

  const handleSubmitGender = (gender: string) => {
    if (gender === currentGender) {
      putParams("gender", "")
    } else {
      putParams("gender", gender)
    }
    setCurrentGender(gender)
  };

  return (
    <div className="flex flex-col gap-y-4">
      {/* Salary */}
      <div>
        <Label className="text-base font-normal text-darkindigo">
          Summa
        </Label>
        <div className="grid grid-cols-3 gap-x-2">
          <div className="flex flex-col gap-y-2 xl:col-span-2 col-span-3">
            <DebouncedInput
              placeholder="Min"
              onChange={(value) => putParams("minSalary", value)}
              delay={500}
            />
            <DebouncedInput
              placeholder="Min"
              onChange={(value) => putParams("maxSalary", value)}
              delay={500}
            />
          </div>
        </div>
      </div>
      {/* Age */}
      <div>
        <Label className="text-base font-normal text-darkindigo">
          Yosh chegarasi
        </Label>
        <div
          className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-2 gap-x-2 content-center">
          <div className="col-span-1">
            <DebouncedInput
              placeholder="Min"
              onChange={(value) => putParams("minAge", value)}
              delay={500}
            />
          </div>
          <div className="col-span-1">
            <DebouncedInput
              placeholder="Max"
              onChange={(value) => putParams("maxAge", value)}
              delay={500}
            />
          </div>
        </div>
      </div>
      {/* Gender */}
      <div>
        <Label className="text-base font-normal text-darkindigo">
          Jins
        </Label>
        <ToggleGroup type="single" className="grid md:grid-cols-2 grid-cols-1 gap-x-2">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="col-span-1 px-3 py-1 rounded-xl"
            variant={"outline"}
            onClick={() => handleSubmitGender("0")}
          >
            Erkak
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="col-span-1 px-3 py-1 rounded-xl"
            variant={"outline"}
            onClick={() => handleSubmitGender("1")}
          >
            Ayol
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {/* Category Combobox */}
      <div>
        <Popover open={openc} onOpenChange={setOpenc}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openc}
              className="w-full justify-between bg-white hover:bg-white text-darkindigo hover:text-darkindigo p-2 rounded-lg"
            >
              <span className="truncate">
                {valuec
                  ? allCategory.find(
                    (category) =>
                      category.title.toLocaleLowerCase() === valuec
                  )?.title
                  : "Kategoriya tanlang..."}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..."/>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {allCategory.map((category) => (
                  <CommandItem
                    key={category.id}
                    value={category.title}
                    onSelect={(currentValue) => {
                      putParams("jobCategoryId",
                        currentValue === valuec ? "" : allCategory.find((c) => c.title.toLocaleLowerCase() === currentValue)
                          ?.id || ""
                      )
                      setValuec(
                        currentValue === valuec ? "" : currentValue
                      );
                      setOpenc(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valuec === category.title.toLocaleLowerCase()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {category.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      {/* Region Combobox */}
      <div>
        <Popover open={openr} onOpenChange={setOpenr}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openr}
              className="w-full justify-between bg-white hover:bg-white text-darkindigo hover:text-darkindigo p-2 rounded-lg"
            >
                      <span className="truncate">
                        {valuer
                          ? regions.find(
                            (region) =>
                              region.name.toLocaleLowerCase() === valuer
                          )?.name
                          : "Viloyat tanlang..."}
                      </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..."/>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {regions.map((region) => (
                  <CommandItem
                    key={region.id}
                    value={region.name}
                    onSelect={(currentValue) => {
                      putParams("regionId",
                        currentValue === valuer ? "" : regions.find((r) => r.name.toLocaleLowerCase() === currentValue)
                          ?.id || ""
                      )
                      setValuer(
                        currentValue === valuer ? "" : currentValue
                      );
                      setOpenr(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valuer === region.name.toLocaleLowerCase()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {region.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      {/* District Combobox */}
      <div>
        <Popover open={opend} onOpenChange={setOpend}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={opend}
              disabled={!valuer}
              className="w-full justify-between bg-white hover:bg-white text-darkindigo hover:text-darkindigo p-2 rounded-lg"
            >
              <span className="truncate">
                {valued
                  ? district.find(
                  (d) => d.name.toLocaleLowerCase() === valued
                )?.name || "Tuman tanlang..."
                  : "Tuman tanlang..."}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..."/>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {district.map((d) => (
                  <CommandItem
                    key={d.id}
                    value={d.name}
                    onSelect={(currentValue) => {
                      putParams("districtId",
                        currentValue === valued ? "" : district.find((d) => d.name.toLocaleLowerCase() === currentValue)
                          ?.id || ""
                      )
                      setValued(
                        currentValue === valued ? "" : currentValue
                      );
                      setOpend(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valued === d.name.toLocaleLowerCase()
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {d.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default Filter