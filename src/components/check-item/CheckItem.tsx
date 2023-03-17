import React from "react";

type Props = {
  title: string;
  checked: boolean;
  onClick: any;
};

const CheckItem = ({ title, checked, onClick }: Props): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row items-center space-x-2 cursor-pointer"
    >
      <div
        className={`grid ${
          checked
            ? "text-white bg-primary-original border-primary-original "
            : "text-white bg-white border-gray-100 "
        } border-2 rounded  p-2 items-center content-center justify-center h-3 w-3 `}
      >
        &#10004;
      </div>
      <p className="text-sm text-slate-700 capitalize">{title}</p>
    </div>
  );
};

export default CheckItem;
