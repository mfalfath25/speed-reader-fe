import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Area,
  AreaChart,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    testId: 1,
    wpm: 250,
    accuracy: 100,
  },
  {
    testId: 2,
    wpm: 300,
    accuracy: 50,
  },
  {
    testId: 3,
    wpm: 275,
    accuracy: 80,
  },
]

export const MyProgress = () => {
  return (
    <>
      <div className="grid grid-cols-1 auto-rows-auto gap-10">
        <div className="flex justify-center">
          <div className="alert h-fit">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-row mb-auto mr-auto">
                <div>
                  <BiInfoCircle size={28} className="w-auto" />
                </div>
                <div className="flex flex-col">
                  <span className="ml-2 font-bold text-base sm:text-xl">Info</span>
                  <span className="ml-2 mb-auto text-base sm:text-xl">
                    Skor rerata dikalkulasi berdasarkan hasil latihan Normal Test dan Blind Test.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto gap-2 w-full">
          <div className="stats stats-vertical sm:stats-horizontal shadow w-full sm:w-fit bg-slate-100">
            <div className="stat">
              <div className="stat-title text-xl text-black font-bold text-center">
                Avg Reading Speed
              </div>
              <div className="stat-value text-primary mx-auto">285 WPM</div>
            </div>

            <div className="stat">
              <div className="stat-title text-xl text-black font-bold text-center">
                Avg Comprehension
              </div>
              <div className="stat-value text-primary mx-auto">85%</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-xl sm:text-2xl font-bold">Grafik Perkembangan Latihan</p>
          <div style={{ width: '100%' }}>
            <p className="text-xl font-semibold my-2">Reading Speed Overtime</p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width={500}
                height={400}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="testId"
                  label={{ value: 'Number of Tests', position: 'insideBottomRight' }}
                />
                <YAxis dataKey="wpm" label={{ value: 'WPM', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Area type="linear" dataKey="wpm" stroke="#BA7ED0" fill="#9791F3" />
              </AreaChart>
            </ResponsiveContainer>

            <p className="text-xl font-semibold my-2">Comprehension Accuracy compared to WPM</p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width={500}
                height={200}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="wpm" label={{ value: 'WPM', position: 'insideBottomRight' }} />
                <YAxis
                  dataKey="accuracy"
                  label={{ value: 'Accuracy', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip />
                <Area type="linear" dataKey="accuracy" stroke="#BA7ED0" fill="#9791F3" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  )
}
