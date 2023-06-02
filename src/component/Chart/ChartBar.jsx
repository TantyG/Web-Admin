import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from 'recharts';

const ChartBar = () => {
    const data =[
        {
            name: '06 March',
            uv: 4000,
            pv: 0,
            amt: 2400,
          },
          {
            name: '07 March',
            uv: 0,
            pv: -3000,
            amt: 2210,
          },
          {
            name: '08 March',
            uv: 2000,
            pv: 0,
            amt: 2290,
          },
          {
            name: '09 March',
            uv: 0,
            pv: -3908,
            amt: 2000,
          },
          {
            name: '10 March',
            uv: 1890,
            pv: 0,
            amt: 2181,
          },
          {
            name: '11 March',
            uv: 0,
            pv: -3800,
            amt: 2500,
          },
          {
            name: '12 March',
            uv: 3490,
            pv: 0,
            amt: 2100,
          },
    ]
  return (
    <>
       <BarChart
          width={900}
          height={500}
          data={data}
          stackOffset="sign"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="pv" fill="#F05D5E" stackId="stack" radius={[15, 15, 0, 0]}/>
          <Bar dataKey="uv" fill="#4FB5C9" stackId="stack" radius={[15, 15, 0, 0]} />
        </BarChart>
    </>
  );
};
export default ChartBar;
