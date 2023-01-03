import React from 'react'
import { BiAlarm, BiBarChart, BiBookReader, BiEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { getTotalFormattedReadTime } from '../../logic'
import { getFirstLetter } from '../../logic/utils'
import { useTrainingStore } from '../../store/TrainingStore'
import { useUserStore } from '../../store/UserStore'
import { Button } from '../atoms'

export const ProfileMenu = () => {
  const navigate = useNavigate()
  const { trainingData } = useTrainingStore()
  const { userData } = useUserStore()

  return (
    <>
      <div className="grid grid-cols-1 gap-10 sm:gap-20">
        <div className="flex flex-col justify-center mx-auto gap-4">
          <div className="mx-auto">
            {/* <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content w-24 mask mask-hexagon">
                <span className="text-3xl">{getFirstLetter(userData?.username)}</span>
              </div>
            </div> */}
          </div>
          <span className="mx-auto text-2xl font-bold">{userData?.username}</span>
          <Button text="Edit Profile" onClick={() => navigate('/profile/edit/1')}>
            <BiEdit size={24} className="ml-2" />
          </Button>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto gap-4 w-full">
          <span className="text-xl sm:text-2xl">Overview Latihan</span>
          <div className="stats stats-vertical sm:stats-horizontal shadow w-full sm:w-fit bg-slate-100 mb-6">
            <div className="stat">
              <div className="stat-figure text-primary">
                <BiBookReader size={32} className="ml-2" />
              </div>
              <div className="stat-title text-xl text-black font-bold">Total latihan</div>
              <div className="stat-value text-primary">{trainingData?.length}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <BiAlarm size={32} className="ml-2" />
              </div>
              <div className="stat-title text-xl text-black font-bold">Total waktu membaca</div>
              <div className="stat-value text-primary">
                {getTotalFormattedReadTime(trainingData)}
              </div>
            </div>
          </div>

          <span className="text-xl sm:text-2xl">Lihat detail progress latihan</span>
          <Button
            text="My Progress"
            weight="primary"
            onClick={() => navigate('/profile/progress/1')}
          >
            <BiBarChart size={24} className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col mx-auto gap-2"></div>
    </>
  )
}
