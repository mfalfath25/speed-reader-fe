import React from 'react'
import {
  BiAlarm,
  BiBarChart,
  BiBookReader,
  BiEdit,
  BiLoader,
} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { Button } from '../atoms'
import {
  getAverageReadTime,
  getFormattedReadTime,
  getTotalFormattedReadTime,
  getTrainingCount,
} from '../../logic'
import { getFirstLetter } from '../../logic/utils'
import { useFetchUser } from '../../hooks'

export const ProfileMenu = () => {
  const navigate = useNavigate()
  const { userData, isLoading, isError } = useFetchUser()

  return (
    <>
      {isLoading ? (
        <div className="flex flex-1 flex-col items-center justify-center">
          <BiLoader size={32} className="bg- mb-2 animate-spin text-primary" />
          <div className="stat-value animate-pulse text-2xl text-primary">
            Loading
          </div>
        </div>
      ) : (
        <div className="mx-auto grid w-fit">
          <div className="mx-auto grid grid-flow-row gap-5 sm:grid-flow-col">
            <div className="stats stats-vertical w-full bg-slate-100 shadow sm:w-fit">
              <div className="stat gap-5">
                <div className="avatar placeholder mx-auto">
                  <div className="mask mask-hexagon w-24 bg-neutral-focus text-neutral-content">
                    <span className="text-3xl">
                      {userData.username !== ''
                        ? getFirstLetter(userData?.username)
                        : '-'}
                    </span>
                  </div>
                </div>
                <div className="stat-value flex flex-col gap-2">
                  <span className="mx-auto text-2xl font-bold">
                    {userData?.username}
                  </span>
                  <span className="mx-auto text-xl font-normal">
                    {userData?.email}
                  </span>
                </div>
                <div className="stat-desc mx-auto text-lg">Trainee</div>
              </div>

              <div className="stat">
                <Button
                  text="Edit Profile"
                  onClick={() => navigate(`/profile/edit/${userData.userId}`)}
                >
                  <BiEdit size={24} className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="stats stats-vertical w-full bg-slate-100 shadow sm:w-fit">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <BiBookReader size={40} className="ml-2" />
                </div>
                <div className="stat-title text-xl font-bold text-black">
                  Total latihan membaca
                </div>
                <div
                  className={`stat-value text-primary ${
                    isError ? 'text-red-500' : null
                  } ${isLoading ? 'animate-pulse' : null}`}
                >
                  {isLoading
                    ? 'Loading...'
                    : !isError && userData?.trainings.length}
                  {isError && 'Fetch error'}
                </div>
                <div className="stat-desc text-lg">
                  {isLoading
                    ? 'Loading...'
                    : !isError &&
                      `Normal (${getTrainingCount(
                        userData?.trainings,
                        'Normal'
                      )}) -
                        Blind (${getTrainingCount(
                          userData?.trainings,
                          'Blind'
                        )}) - 
                        Custom (${getTrainingCount(
                          userData?.trainings,
                          'Custom'
                        )})`}
                  {isError && 'Fetch error'}
                </div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary">
                  <BiAlarm size={40} className="ml-2" />
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
                    : !isError &&
                      getTotalFormattedReadTime(userData?.trainings)}
                  {isError && 'Fetch error'}
                </div>
                <div className="stat-desc text-lg">
                  {isLoading
                    ? 'Loading...'
                    : !isError &&
                      `Rata-rata -> ${getFormattedReadTime(
                        getAverageReadTime(userData?.trainings)
                      )} / latihan`}
                  {isError && 'Fetch error'}
                </div>
              </div>
              <div className="stat">
                <Button
                  text="My Progress"
                  style="primary"
                  width="full"
                  onClick={() =>
                    navigate(`/profile/progress/${userData.userId}`)
                  }
                >
                  <BiBarChart size={24} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
