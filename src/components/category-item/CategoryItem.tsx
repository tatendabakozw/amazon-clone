import React from "react";

interface CategoryItemProps {
  picture: any;
  heading: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  return (
    <div className="flex flex-col col-span-1">
      <div className=" bg-white p-4">
        <p className="text-slate-900 font-semibold text-lg pb-2">
          {props.heading}
        </p>
        <div className="grid ">
          <div className="flex flex-col">
            <img src={props.picture} alt="category item picture" />
            {/* <p className="text-xs">Headsets</p> */}
          </div>
        </div>
        <p className="pt-8 text-blue-600 text-sm cursor-pointer">See more</p>
      </div>
    </div>
  );
};

export default CategoryItem;
