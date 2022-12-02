import React from 'react'
import { BiAlarm, BiBarChart, BiBookReader, BiEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { checkPathnameDepth } from '../../logic/utils'
import { Button } from '../atoms'
import { ProfileSections } from '../organisms'

const ProfileMenu = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-0 sm:grid-rows-3 auto-rows-auto gap-10">
        <div className="flex flex-col justify-center mx-auto gap-2">
          <div className="mx-auto">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content w-24 mask mask-hexagon">
                <span className="text-3xl">RX</span>
              </div>
            </div>
          </div>
          <span className="mx-auto text-2xl font-bold">Username</span>
          <span className="mx-auto text-xl">user@gmail.com</span>
          <Button text="Edit Profile" onClick={() => navigate('/profile/edit/1')}>
            <BiEdit size={24} className="ml-2" />
          </Button>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto gap-2 w-full">
          <div className="stats stats-vertical sm:stats-horizontal shadow w-full sm:w-fit bg-slate-100">
            <div className="stat">
              <div className="stat-figure text-primary">
                <BiBookReader size={32} className="ml-2" />
              </div>
              <div className="stat-title text-xl text-black font-bold">Total latihan</div>
              <div className="stat-value text-primary">25</div>
              {/* <div className="stat-desc"></div> */}
            </div>

            <div className="stat">
              <div className="stat-figure text-primary">
                <BiAlarm size={32} className="ml-2" />
              </div>
              <div className="stat-title text-xl text-black font-bold">Total waktu membaca</div>
              <div className="stat-value text-primary">35m 20s</div>
              {/* <div className="stat-desc"></div> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start mx-auto gap-2">
          <span className="text-xl sm:text-2xl">Lihat progress latihan</span>
          <Button
            text="My Progress"
            weight="primary"
            onClick={() => navigate('/profile/progress/1')}
          >
            <BiBarChart size={24} className="ml-2" />
          </Button>
        </div>
      </div>
    </>
  )
}

export const Profile = () => {
  // const navigate = useNavigate()
  const renderPart = () => {
    switch (checkPathnameDepth(location.pathname)) {
      case 1:
        return <ProfileMenu />
      case 3:
        return <ProfileSections />
    }
  }

  return <>{renderPart()}</>
}
