import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: "Back End", students: 289 },
  { name: "Front End", students: 200 },
  { name: "Quality Assurance", students: 350 },
  { name: "UI/UX", students: 150 },
];

const StudentChart: React.FC = () => {
  return (
    <>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="students" fill="#a51535" />
      </BarChart>
    </>
  );
};

export default StudentChart;
