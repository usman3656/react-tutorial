import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BarChartData from '../../utils/barChart';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// console.log(data);
const data=BarChartData;
export default function BarGraph() {
  return (
    <div className=" bg-white p-4 rounded border ">
      <strong className="">Sales</strong>
      <div className="mt-3">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: -10,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3 0 0" />
          <XAxis dataKey="name"  vertical={false} />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Sales" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  )
}
