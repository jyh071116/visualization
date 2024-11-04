"use client";

import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
  ZAxis
} from "recharts";

// 데이터 타입 정의
interface DataType {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface PieDataType {
  name: string;
  value: number;
}

interface RadarDataType {
  subject: string;
  A: number;
  B: number;
  fullMark: number;
}

interface ScatterDataType {
  x: number;
  y: number;
  z: number;
}

export default function App() {
  const [data, setData] = useState<DataType[]>([]);
  const [pieData, setPieData] = useState<PieDataType[]>([]);
  const [radarData, setRadarData] = useState<RadarDataType[]>([]);
  const [scatterData, setScatterData] = useState<ScatterDataType[]>([]);

  useEffect(() => {
    setData([
      { name: "A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "E", uv: 1890, pv: 4800, amt: 2181 },
      { name: "F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "G", uv: 3490, pv: 4300, amt: 2100 }
    ]);

    setPieData([
      { name: "A", value: 400 },
      { name: "B", value: 300 },
      { name: "C", value: 300 },
      { name: "D", value: 200 }
    ]);

    setRadarData([
      { subject: "Math", A: 120, B: 110, fullMark: 150 },
      { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
      { subject: "English", A: 86, B: 130, fullMark: 150 },
      { subject: "Geography", A: 99, B: 100, fullMark: 150 },
      { subject: "Physics", A: 85, B: 90, fullMark: 150 },
      { subject: "History", A: 65, B: 85, fullMark: 150 }
    ]);

    setScatterData([
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 }
    ]);
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <h1 className="text-2xl font-bold text-center mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Area Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Area Chart</h2>
          <AreaChart
            width={400}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="url(#colorUv)" />
          </AreaChart>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Bar Chart</h2>
          <BarChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Line Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Line Chart</h2>
          <LineChart width={400} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Pie Chart</h2>
          <PieChart width={400} height={250}>
            <Pie
              data={pieData}
              cx={210}
              cy={110}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Radar Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Radar Chart</h2>
          <RadarChart cx={225} cy={110} outerRadius={80} width={400} height={250} data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Student A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Student B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </div>

        {/* Scatter Chart */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Scatter Chart</h2>
          <ScatterChart width={400} height={250}>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="X Axis" />
            <YAxis type="number" dataKey="y" name="Y Axis" />
            <ZAxis type="number" dataKey="z" range={[60, 400]} name="Z Axis" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="Points" data={scatterData} fill="#8884d8" />
          </ScatterChart>
        </div>
      </div>
    </div>
  );
}
