import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Scatter } from 'react-chartjs-2'
import { useTrainingStore } from '../../../store/TrainingStore'
import moment from 'moment'
import { getAverageAccuracy, getAverageWpm } from '../../../logic'

export const MyProgress = () => {
  const { trainingData } = useTrainingStore()
  const trainingCount = () => {
    let x = []
    for (let i = 0; i < trainingData.length; i++) {
      if (trainingData[i].mode === 'Normal' || trainingData[i].mode === 'Blind') {
        // x.push(`${i + 1}`)
        x.push(moment(trainingData[i].readDate).format('DD MMM YY'))
      }
    }
    return x
  }

  const plotWpm = () => {
    let x = []
    for (let i = 0; i < trainingData.length; i++) {
      if (trainingData[i].mode === 'Normal' || trainingData[i].mode === 'Blind') {
        x.push(trainingData[i].wpm)
      }
    }
    return x
  }

  const plotAccuracy = () => {
    let x = []
    for (let i = 0; i < trainingData.length; i++) {
      if (trainingData[i].mode === 'Normal' || trainingData[i].mode === 'Blind') {
        x.push(trainingData[i].accuracy)
      }
    }
    return x
  }
  const labels = trainingCount()

  const data = {
    labels,
    datasets: [
      // {
      //   label: 'WPM Overtime',
      //   data: Array.from(trainingData, (item) => ({
      //     x: item.accuracy,
      //     y: item.wpm,
      //   })),
      //   borderColor: 'rgb(255, 99, 132)',
      //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
      // },

      {
        label: 'WPM',
        // data: trainingData.map((item) =>
        //   item.mode === 'Normal' || item.mode === 'Blind' ? item.wpm : null
        // ),
        data: trainingData.map((item) => item.wpm),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Akurasi %',
        data: trainingData.map((item) => item.accuracy),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1',
      },
    ],
  }

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Kecepatan Membaca (WPM)',
        },
        grid: {
          drawOnChartArea: true,
        },
      },
      y1: {
        title: {
          display: true,
          text: 'Akurasi Pemahaman (%)',
        },
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Timeline Latihan',
        },
      },
    },
  }

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
                    Skor rerata dikalkulasi berdasarkan hasil latihan pada mode Normal dan mode
                    Blind.
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
              <div className="stat-value text-primary mx-auto">
                {getAverageWpm(trainingData)} WPM
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-xl text-black font-bold text-center">
                Avg Comprehension
              </div>
              <div className="stat-value text-primary mx-auto">
                {getAverageAccuracy(trainingData)} %
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-xl sm:text-2xl font-bold">Grafik Perkembangan Latihan</p>
          <div style={{ width: '100%' }}>
            <p className="text-xl font-semibold my-2">Kecepatan membaca dari waktu ke waktu</p>
            <Line options={options} data={data} />
          </div>
        </div>
      </div>
    </>
  )
}
