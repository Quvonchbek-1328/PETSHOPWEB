import {useEffect, useState} from "react";
import {JobCategory} from "@/types";
import {getCountJobsForCategory} from "@/store/api";
import {SkeletonCategory} from "@/components/skeleton/skeleton-category";

interface CategoryCardProps {
  category: JobCategory
}

const CategoryCard = ({category}: CategoryCardProps) => {
  const [count, setCount] = useState<number>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountJobsForCategory(category.id).then((c) => (setCount(c))).then(() => setLoading(false))
  }, [category]);

  return (
    loading ? (<SkeletonCategory/>) : (<div
      className="flex flex-col items-center justify-center p-4 font-roboto rounded-xl border-[1px] border-solid border-indigo-200 bg-white text-black hover:text-white hover:bg-darkblue transition-colors">
      <span className="font-semibold">{category.title}</span>
      <span className="text-gray-400">{`${count} services`}</span>
    </div>)

  );
};

export default CategoryCard;
