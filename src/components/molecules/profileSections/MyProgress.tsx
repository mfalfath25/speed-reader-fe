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
import {
  getAverageAccuracy,
  getAverageWpm,
  getFilteredData,
  getFormattedReadDate,
} from '../../../logic'
import { fetchUserData } from '../../../hooks'
import { useUserStore } from '../../../stores'

export const MyProgress = () => {
  const fetcher = fetchUserData()
  const { userData } = useUserStore()
  const labelNormalMode = getFormattedReadDate(userData.trainings, 'Normal')
  const labelBlindMode = getFormattedReadDate(userData.trainings, 'Blind')
  const filteredNormalMode = getFilteredData(userData.trainings, 'Normal')
  const filteredBlindMode = getFilteredData(userData.trainings, 'Blind')

  const dataNormalMode = {
    labels: labelNormalMode,
    datasets: [
      {
        label: 'WPM',
        data: filteredNormalMode.map((item) => item.wpm),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Akurasi %',
        data: filteredNormalMode.map((item) => item.accuracy),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1',
      },
    ],
  }

  const dataBlindMode = {
    labels: labelBlindMode,
    datasets: [
      {
        label: 'WPM',
        data: filteredBlindMode.map((item) => item.wpm),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Akurasi %',
        data: filteredBlindMode.map((item) => item.accuracy),
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
                Rerata Kecepatan Membaca
              </div>
              <div className="stat-value text-primary mx-auto">
                {fetcher.isLoading ? 'Loading...' : getAverageWpm(userData.trainings) + ' WPM'}
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-xl text-black font-bold text-center">
                Rerata Akurasi Pemahaman
              </div>
              <div className="stat-value text-primary mx-auto">
                {fetcher.isLoading ? 'Loading...' : getAverageAccuracy(userData.trainings) + ' %'}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-xl sm:text-2xl font-bold mb-4">Grafik Perkembangan Latihan</p>
          {fetcher.isLoading ? (
            'Loading...'
          ) : (
            <div className="flex flex-col xl:flex-row w-full">
              <div className="w-full xl:w-1/2 text-center">
                <p className="inline-block sm:text-left text-base sm:text-xl font-semibold my-2">
                  Progres mode Normal
                </p>
                <Line options={options} data={dataNormalMode} />
              </div>
              <div className="w-full xl:w-1/2 text-center">
                <p className="inline-block sm:text-left text-base sm:text-xl font-semibold my-2">
                  Progres mode Blind
                </p>
                <Line options={options} data={dataBlindMode} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
