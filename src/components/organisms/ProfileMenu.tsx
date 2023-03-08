import React from 'react'
import { BiAlarm, BiBarChart, BiBookReader, BiEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { Button } from '../atoms'
import { getTotalFormattedReadTime } from '../../logic'
import { getFirstLetter } from '../../logic/utils'
import { useFetchUser } from '../../hooks'

export const ProfileMenu = () => {
  const navigate = useNavigate()
  const { userData, isLoading, isError } = useFetchUser()

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:gap-20">
        <div className="mx-auto flex flex-col justify-center gap-3">
          <div className="mx-auto">
            <div className="placeholder avatar">
              <div className="mask mask-hexagon w-24 bg-neutral-focus text-neutral-content">
                <span className="text-3xl">
                  {userData.username !== ''
                    ? getFirstLetter(userData?.username)
                    : '-'}
                </span>
              </div>
            </div>
          </div>
          <span className="mx-auto text-2xl font-bold">
            {userData?.username}
          </span>
          <span className="mx-auto text-xl font-normal">{userData?.email}</span>
          <Button
            text="Edit Profile"
            onClick={() => navigate(`/profile/edit/${userData.userId}`)}
          >
            <BiEdit size={24} className="ml-2" />
          </Button>
        </div>

        <div className="mx-auto flex w-full flex-col items-center justify-center gap-3">
          <span className="text-xl sm:text-2xl">Overview Latihan</span>
          <div className="stats stats-vertical mb-6 w-full bg-slate-100 shadow sm:w-fit sm:stats-horizontal">
            <div className="stat">
              <div className="stat-figure text-primary">
                <BiBookReader size={32} className="ml-2" />
              </div>
              <div className="stat-title text-xl font-bold text-black">
                Total latihan
              </div>
              <div
                className={`stat-value text-primary ${
                  isError ? 'text-red-500' : null
                } ${isLoading ? 'animate-pulse' : null}`}
              >
                {isLoading
                  ? 'Loading...'
                  : !isError && userData.trainings.length}
                {isError && 'Fetch error'}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <BiAlarm size={32} className="ml-2" />
              </div>
              <div className="stat-title text-xl font-bold text-black">
                Total waktu membaca
              </div>
              <div
                className={`stat-value text-primary ${
                  isError ? 'text-red-500' : null
                } ${isLoading ? 'animate-pulse' : null}`}
              >
                {isLoading
                  ? 'Loading...'
                  : !isError && getTotalFormattedReadTime(userData.trainings)}
                {isError && 'Fetch error'}
              </div>
            </div>
          </div>

          <span className="text-xl sm:text-2xl">
            Lihat detail progress latihan
          </span>
          <Button
            text="My Progress"
            className="btn-primary"
            onClick={() => navigate(`/profile/progress/${userData.userId}`)}
          >
            <BiBarChart size={24} className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="mx-auto flex flex-col gap-2"></div>
    </>
  )
}
