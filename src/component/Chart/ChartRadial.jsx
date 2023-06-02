import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "Bank $4,567,890.12",
    uv: 4567890.12,
    pv: 2400,
    fill: "#F3BA2F",
  },
  {
    name: "Token $1,567,890.12",
    uv: 1567890.12,
    pv: 4567,
    fill: "#54C2C1",
  },
  {
    name: "Stock $567,890.12",
    uv: 567890.12,
    pv: 1398,
    fill: "#9020E9",
  },
  {
    name: "Cash $67,890.12",
    uv: 67890.12,
    pv: 9800,
    fill: "#000000",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(-160px, -50%)",
  lineHeight: "24px",
};

const ChartRadial = () => {
  return (
    <>
      <RadialBarChart
        width={400}
        height={800}
        cx={150}
        cy={150}
        innerRadius={40}
        outerRadius={120}
        barSize={13}
        data={data}
      >
        <RadialBar
          minAngle={50}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </>
  );
};
export default ChartRadial;
