import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTrainingStore } from '../../../store/TrainingStore'
import { Button } from '../../atoms'
import moment from 'moment'

export const Results = () => {
  const navigate = useNavigate()
  const data = useTrainingStore((state) => state.trainingText)

  return (
    <>
      <div className="grid grid-cols-1 auto-rows-auto gap-10">
        <div className="flex flex-col mx-auto gap-4">
          <div className="flex flex-col">
            <p className="text-xl">Mode</p>
            <p className="text-2xl font-bold">{data[data.length - 1].mode}</p>
          </div>
          <div className="stats stats-vertical shadow bg-slate-100">
            <div className="stat min-w-[340px] sm:w-full">
              <div className="stat-title text-xl text-black font-bold text-center">
                Reading Speed
              </div>
              <div className="stat-value text-primary mx-auto">{data[data.length - 1].wpm} WPM</div>
            </div>
            <div className="stat">
              <div className="stat-title text-xl text-black font-bold text-center">Word Count</div>
              <div className="stat-value text-primary mx-auto">
                {data[data.length - 1].text.textWordCount} words
              </div>
            </div>

            {data[data.length - 1].mode === ('normal' || 'blind') && (
              <div className="flex flex-row">
                <div className="stat">
                  <div className="stat-title text-xl text-black font-bold text-center">
                    Word Count
                  </div>
                  <div className="stat-value text-primary mx-auto">
                    {data[data.length - 1].text.textWordCount} words
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-title text-xl text-black font-bold text-center">
                    Accuracy
                  </div>
                  <div className="stat-value text-primary mx-auto">
                    {data[data.length - 1].accuracy}%
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <p className="text-xl">Date taken</p>
            <p className="text-2xl font-bold">
              {moment(data[data.length - 1].readDate).format('l')}
            </p>
          </div>

          <Button text="Home" weight="primary" onClick={() => navigate('/')} />
          <Button text="Restart" outline onClick={() => navigate('/training/custom/simulate')} />
        </div>
      </div>
    </>
  )
}
