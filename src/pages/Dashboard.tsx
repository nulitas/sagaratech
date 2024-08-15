import DateCard from "../components/DateCard";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import StudentChart from "../components/StudentChart";
import { FaCube } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <main className="flex-1">
        <Header />
        <div className="w-full p-6">
          <DateCard />
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6  p-6">
          <StatsCard
            title="Total Students"
            value={513}
            percentage={3.5}
            description="Up from yesterday"
            Icon={IoMdPeople}
            iconBgColor="bg-[#d2dcf2]"
            iconColor="text-[#2758c1]"
          />
          <StatsCard
            title="Total Certified Students"
            value={489}
            percentage={8.5}
            description="Up from yesterday"
            Icon={FaCube}
            iconBgColor="bg-[#e3cdd2]"
            iconColor="text-[#791229]"
          />
          <StatsCard
            title="Average Certification Score"
            value={84.62}
            percentage={8.5}
            description="Up from yesterday"
            Icon={FaChartLine}
            iconBgColor="bg-[#d9f7e8]"
            iconColor="text-[#4ad991]"
          />
        </div>
        <div className="p-6">
          <div className=" bg-white shadow rounded ">
            <h2 className="text-lg font-semibold mb-4 p-4">Student</h2>
            <StudentChart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
