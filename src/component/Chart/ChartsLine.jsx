import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ChartsLine = ({ aspect }) => {
  const data = [
    {
      name: "12:00",
      line: 4000,
    },
    {
      name: "1:00",
      line: 3000,
    },
    {
      name: "2:00",
      line: 2000,
    },
    {
      name: "3:00",
      line: 2780,
    },
    {
      name: "4:00",
      line: 1890,
    },
    {
      name: "5:00",
      line: 2390,
    },
    {
      name: "6:00",
      line: 3490,
    },
  ];
  return (
    <>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid  horizontal="true" vertical="" />
          <XAxis axisLine={false} dataKey="name" />
          <YAxis axisLine={false}  />
          <defs>
            <linearGradient id="colorUv" x1="50%" y1="0%" x2="0%" y2="50%">
              <stop offset="0%" stopColor="#9747FF" />
              <stop offset="100%" stopColor="#14F4C9" />
            </linearGradient>
          </defs>
          <Line type="monotone" dataKey="line" stroke="url(#colorUv)"
          activeDot={{r: 8}}
          
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
export { ChartsLine };
