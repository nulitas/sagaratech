import React from "react";
import { IconType } from "react-icons";
import { IoIosTrendingUp } from "react-icons/io";

interface StatsCardProps {
  title: string;
  value: number;
  percentage: number;
  description: string;
  Icon: IconType;
  iconBgColor: string;
  iconColor: string;
  percentageColor?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  percentage,
  description,
  Icon,
  iconBgColor,
  iconColor,
  percentageColor,
}) => {
  const percentageTextColor =
    percentageColor || (percentage > 0 ? "text-[#00b69b]" : "text-red-500");

  return (
    <div className="p-4 bg-white shadow rounded flex items-center justify-between">
      <div>
        <div className="text-gray-500 font-medium">{title}</div>
        <div className="text-3xl font-bold text-black mt-2">{value}</div>
        <div className={`mt-2 flex items-center ${percentageTextColor}`}>
          <IoIosTrendingUp className="mr-1" /> <span>{percentage}%</span>
          <span className="ml-1 text-gray-500">{description}</span>
        </div>
      </div>
      <div className={`ml-4 p-2 rounded-md ${iconBgColor}`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />{" "}
      </div>
    </div>
  );
};

export default StatsCard;
