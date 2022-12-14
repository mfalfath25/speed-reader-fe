import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTrainingStore } from '../../../store/TrainingStore'
import { Button } from '../../atoms'
import moment from 'moment'
import { getFormattedReadTime } from '../../../logic'

export const Results = () => {
  const navigate = useNavigate()
  const data = useTrainingStore((state) => state.trainingData)

  const handleRestart = () => {
    switch (data[data.length - 1].mode) {
      case 'Normal':
        navigate('/training/normal/simulate')
        break
      case 'Blind':
        navigate('/training/blind/simulate')
        break
      case 'Custom':
        navigate('/training/custom/simulate')
        break
    }
  }

  const renderStats = () => {
    switch (data[data.length - 1].mode) {
      case 'Normal':
        return (
          <>
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
                <div className="stat-title text-xl text-black font-bold text-center">Accuracy</div>
                <div className="stat-value text-primary mx-auto">
                  {data[data.length - 1].accuracy}%
                </div>
              </div>
            </div>
          </>
        )
      case 'Blind':
        return (
          <>
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
                <div className="stat-title text-xl text-black font-bold text-center">Accuracy</div>
                <div className="stat-value text-primary mx-auto">
                  {data[data.length - 1].accuracy}%
                </div>
              </div>
            </div>
          </>
        )
      case 'Custom':
        return (
          <>
            <div className="stat">
              <div className="stat-title text-xl text-black font-bold text-center">Word Count</div>
              <div className="stat-value text-primary mx-auto">
                {data[data.length - 1].text.textWordCount} words
              </div>
            </div>
          </>
        )
    }
  }

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
            {renderStats()}
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <p className="text-xl">Date taken</p>
              <p className="text-2xl font-bold">
                {moment(data[data.length - 1].readDate).format('l')}
              </p>
            </div>
            <div>
              <p className="text-xl text-right">Reading Time</p>
              <p className="text-2xl font-bold text-right">
                {getFormattedReadTime(data[data.length - 1].readTime)}
              </p>
            </div>
          </div>
          <Button text="Home" weight="primary" onClick={() => navigate('/')} />
          <Button text="Restart" outline onClick={handleRestart} />
        </div>
      </div>
    </>
  )
}
