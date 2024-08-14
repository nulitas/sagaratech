import React from "react";

interface StatsCardProps {
  title: string;
  value: number;
  percentage: number;
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  percentage,
  description,
}) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-gray-500">{value}</div>
      </div>
      <div
        className={`mt-2 ${percentage > 0 ? "text-green-500" : "text-red-500"}`}
      >
        {percentage}% {description}
      </div>
    </div>
  );
};

export default StatsCard;
