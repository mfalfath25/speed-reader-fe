import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../atoms'

export const Results = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="grid grid-cols-1 auto-rows-auto gap-10">
        <div className="flex flex-col mx-auto gap-4">
          <div className="flex flex-col">
            <p className="text-xl">Mode</p>
            <p className="text-2xl font-bold">Custom test</p>
          </div>
          <div className="stats stats-vertical shadow w-full sm:w-fit bg-slate-100">
            <div className="stat">
              <div className="stat-title text-xl text-black font-bold text-center">
                Reading Speed
              </div>
              <div className="stat-value text-primary mx-auto">285 WPM</div>
            </div>

            <div className="flex flex-row">
              <div className="stat">
                <div className="stat-title text-xl text-black font-bold text-center">
                  Word Count
                </div>
                <div className="stat-value text-primary mx-auto">420 words</div>
              </div>
              <div className="stat">
                <div className="stat-title text-xl text-black font-bold text-center">Accuracy</div>
                <div className="stat-value text-primary mx-auto">85%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-xl">Tanggal</p>
            <p className="text-2xl font-bold">12/16/2022</p>
          </div>

          <Button text="Home" weight="primary" onClick={() => navigate('/')} />
          <Button text="Restart" outline onClick={() => navigate('/training/custom/simulate')} />
        </div>
      </div>
    </>
  )
}
