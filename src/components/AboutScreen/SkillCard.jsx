// SkillCard.jsx
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function SkillCard({ percentage, icon, label }) {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        {/* Circular progress */}
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: "#ff6600",
            trailColor: "#333",
          })}
        />
        {/* Icon in the center */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
      {/* Percentage below the circle */}
      <p className="mt-2 text-orange-500 font-semibold text-sm sm:text-base">{percentage}%</p>
      {/* Label */}
      <p className="text-xs sm:text-sm">{label}</p>
    </div>
  );
}

export default SkillCard;
