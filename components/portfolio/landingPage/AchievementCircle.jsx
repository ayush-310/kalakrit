import React from "react";

const AchievementCircle = ({ metric, desc }) => {
  return (
    <div className="z-10 w-[15.3125rem] h-[9.25rem] bg-transparent box-border rounded-full border border-solid border-blackText-200 flex flex-col text-center justify-center items-center gap-2">
      <span className="text-orange-600 text-3xl font-semibold font-Poppins">
        {metric}
      </span>
      <span className="w-fit text-blackText-200 text-base font-Poppins">
        {desc}
      </span>
    </div>
  );
};

export default AchievementCircle;
