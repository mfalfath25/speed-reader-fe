import React from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { Button } from '../../atoms'
import { getFormattedReadTime } from '../../../logic'

export const Results = () => {
  const navigate = useNavigate()
  const { resetTrainingData } = useTrainingStore()
  const { trainingData } = useTrainingStore()

  const handleRestart = () => {
    switch (trainingData[trainingData.length - 1].mode) {
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

  const handleHome = () => {
    resetTrainingData()
    navigate('/')
  }

  const renderStats = () => {
    if (trainingData.length === 0) return null
    else {
      switch (trainingData[trainingData.length - 1].mode) {
        case 'Normal':
          return (
            <>
              <div className="flex flex-row">
                <div className="stat">
                  <div className="stat-title text-xl text-black font-bold text-center">
                    Word Count
                  </div>
                  <div className="stat-value text-primary mx-auto">
                    {trainingData[trainingData.length - 1].text.textWordCount} words
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-title text-xl text-black font-bold text-center">
                    Accuracy
                  </div>
                  <div className="stat-value text-primary mx-auto">
                    {trainingData[trainingData.length - 1].accuracy} %
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
                    {trainingData[trainingData.length - 1].text.textWordCount} words
                  </div>
                </div>
                <div className="stat">
                  <div className="stat-title text-xl text-black font-bold text-center">
                    Accuracy
                  </div>
                  <div className="stat-value text-primary mx-auto">
                    {trainingData[trainingData.length - 1].accuracy} %
                  </div>
                </div>
              </div>
            </>
          )
        case 'Custom':
          return (
            <>
              <div className="stat">
                <div className="stat-title text-xl text-black font-bold text-center">
                  Word Count
                </div>
                <div className="stat-value text-primary mx-auto">
                  {trainingData[trainingData.length - 1].text.textWordCount} words
                </div>
              </div>
            </>
          )
      }
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 auto-rows-auto gap-10">
        <div className="flex flex-col mx-auto gap-4">
          <div className="flex flex-col">
            <p className="text-xl">Mode</p>
            <p className="text-2xl font-bold">
              {trainingData.length !== 0 ? trainingData[trainingData.length - 1].mode : 'undefined'}
            </p>
          </div>
          <div className="stats stats-vertical shadow bg-slate-100">
            <div className="stat min-w-[340px] sm:w-full">
              <div className="stat-title text-xl text-black font-bold text-center">
                Reading Speed
              </div>
              <div className="stat-value text-primary mx-auto">
                {trainingData.length !== 0
                  ? trainingData[trainingData.length - 1].wpm + ' WPM'
                  : 'undefined'}
              </div>
            </div>
            {renderStats()}
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <p className="text-xl">Date taken</p>
              <p className="text-2xl font-bold">
                {trainingData.length !== 0
                  ? moment(trainingData[trainingData.length - 1].readDate).format('l')
                  : 'undefined'}
              </p>
            </div>
            <div>
              <p className="text-xl text-right">Reading Time</p>
              <p className="text-2xl font-bold text-right">
                {trainingData.length !== 0
                  ? getFormattedReadTime(trainingData[trainingData.length - 1].readTime)
                  : 'undefined'}
              </p>
            </div>
          </div>

          <Button text="Home" weight="primary" onClick={handleHome} />
          {trainingData.length !== 0 ? (
            <Button text="Restart" outline onClick={handleRestart} />
          ) : null}
        </div>
      </div>
    </>
  )
}
