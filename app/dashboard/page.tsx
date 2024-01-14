"use client";
import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 1400, pv: 2400, amt: 2800},{name: 'Page C', uv: 2400, pv: 2400, amt: 4400},{name: 'Page D', uv: 4500, pv: 2400, amt: 2200} ];
function DashBoard() {
  return (
    <>
    <h1 className='text-center text-4xl mt-10 mb-20'>DashBoard</h1>
    <div id="dashboard" className='flex flex-col items-center justify-center'>

    <LineChart width={800} height={500} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>

    </div>
    </>
  )
}

export default DashBoard