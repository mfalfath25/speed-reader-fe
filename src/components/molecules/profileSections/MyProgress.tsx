import React from 'react'
import { BiInfoCircle, BiLoader } from 'react-icons/bi'
import { Line } from 'react-chartjs-2'
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
import {
  getAverageAccuracy,
  getAverageWpm,
  getFilteredData,
  getFormattedReadDate,
} from '../../../logic'
import { useFetchUser } from '../../../hooks'

export const MyProgress = () => {
  const { userData, isLoading, isError } = useFetchUser()
  const labelNormalMode = getFormattedReadDate(userData.trainings, 'Normal')
  const labelBlindMode = getFormattedReadDate(userData.trainings, 'Blind')
  const filteredNormalMode = getFilteredData(userData.trainings, 'Normal')
  const filteredBlindMode = getFilteredData(userData.trainings, 'Blind')
  const averageWpm = getAverageWpm(userData.trainings)
  const averageAccuracy = getAverageAccuracy(userData.trainings)

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

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

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
      <div className="grid auto-rows-auto grid-cols-1 gap-10">
        <div className="flex justify-center">
          <div className="alert h-fit">
            <div className="flex flex-col md:flex-row">
              <div className="mb-auto mr-auto flex flex-row">
                <div>
                  <BiInfoCircle size={28} className="w-auto" />
                </div>
                <div className="flex flex-col">
                  <span className="ml-2 text-base font-bold sm:text-xl">
                    Info
                  </span>
                  <span className="ml-2 mb-auto text-base sm:text-xl">
                    Skor rerata dikalkulasi berdasarkan hasil latihan pada mode
                    Normal dan mode Blind.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full flex-col items-center justify-center gap-2">
          <div className="stats stats-vertical w-full bg-slate-100 shadow sm:w-fit sm:stats-horizontal">
            <div className="stat">
              <div className="stat-title text-center text-xl font-bold text-black">
                Rerata Kecepatan Membaca
              </div>
              <div
                className={`stat-value mx-auto text-primary ${
                  isError ? 'text-red-500' : null
                } ${isLoading ? 'animate-pulse' : null}`}
              >
                {isLoading ? 'Loading...' : !isError && averageWpm + ' WPM'}
                {isError && 'Fetch error'}
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-center text-xl font-bold text-black">
                Rerata Akurasi Pemahaman
              </div>
              <div
                className={`stat-value mx-auto text-primary ${
                  isError ? 'text-red-500' : null
                } ${isLoading ? 'animate-pulse' : null}`}
              >
                {isLoading ? 'Loading...' : !isError && averageAccuracy + ' %'}
                {isError && 'Fetch error'}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          {isLoading ? (
            <>
              <BiLoader
                size={32}
                className="bg- mb-2 animate-spin text-primary"
              />
              <div className="stat-value animate-pulse text-primary">
                Loading
              </div>
            </>
          ) : (
            !isError && (
              <>
                <p className="mb-4 text-xl font-bold sm:text-2xl">
                  Grafik Perkembangan Latihan
                </p>
                <div className="flex w-full flex-col xl:flex-row">
                  <div className="w-full text-center xl:w-1/2">
                    <p className="my-2 inline-block text-base font-semibold sm:text-left sm:text-xl">
                      Progres mode Normal
                    </p>
                    <Line options={options} data={dataNormalMode} />
                  </div>
                  <div className="w-full text-center xl:w-1/2">
                    <p className="my-2 inline-block text-base font-semibold sm:text-left sm:text-xl">
                      Progres mode Blind
                    </p>
                    <Line options={options} data={dataBlindMode} />
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </>
  )
}
