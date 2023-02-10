import React, { useEffect } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { Button, ToastAlert } from '../../atoms'
import { getFormattedReadTime } from '../../../logic'
import { useSubmitTrainingMutation } from '../../../api/mutation'
import { AxiosError } from 'axios'

export const Results = () => {
  const navigate = useNavigate()
  const { clearTrainingData } = useTrainingStore()
  const { setTrainingData } = useTrainingStore()
  const trainingData = useTrainingStore(
    (state) => state.trainingData[state.trainingData.length - 1]
  )

  const handleRestart = () => {
    if (trainingData === undefined) return null

    setTrainingData(trainingData.trainingId, {
      ...trainingData,
      isSaved: false,
    })

    switch (trainingData.mode) {
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
    clearTrainingData()
    navigate('/')
  }

  const { mutate } = useSubmitTrainingMutation()

  useEffect(() => {
    if (trainingData === undefined) return navigate('/home')
    else if (trainingData.isSaved === false) {
      setTimeout(() => {
        mutate(trainingData, {
          onSuccess: (res) => {
            ToastAlert(res.data.message, 'success')

            setTrainingData(trainingData.trainingId, {
              ...trainingData,
              isSaved: true,
            })
          },
          onError: (err) => {
            if (err instanceof AxiosError) {
              if (!err?.response) {
                ToastAlert(err?.message, 'error')
              } else {
                ToastAlert('Data tidak tersimpan', 'error')
              }
            }
          },
        })
      }, 500)
    }
  }, [])

  const renderStats = () => {
    switch (trainingData.mode) {
      case 'Normal':
        return (
          <>
            <div className="flex flex-row">
              <div className="stat">
                <div className="stat-title text-center text-xl font-bold text-black">
                  Word Count
                </div>
                <div className="stat-value mx-auto text-primary">
                  {trainingData.text.textWordCount} words
                </div>
              </div>
              <div className="stat">
                <div className="stat-title text-center text-xl font-bold text-black">
                  Accuracy
                </div>
                <div className="stat-value mx-auto text-primary">
                  {trainingData.accuracy} %
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
                <div className="stat-title text-center text-xl font-bold text-black">
                  Word Count
                </div>
                <div className="stat-value mx-auto text-primary">
                  {trainingData.text.textWordCount} words
                </div>
              </div>
              <div className="stat">
                <div className="stat-title text-center text-xl font-bold text-black">
                  Accuracy
                </div>
                <div className="stat-value mx-auto text-primary">
                  {trainingData.accuracy} %
                </div>
              </div>
            </div>
          </>
        )
      case 'Custom':
        return (
          <>
            <div className="stat">
              <div className="stat-title text-center text-xl font-bold text-black">
                Word Count
              </div>
              <div className="stat-value mx-auto text-primary">
                {trainingData.text.textWordCount} words
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <>
      <div className="grid auto-rows-auto grid-cols-1 gap-10">
        <div className="mx-auto flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-xl">Mode</p>
            <p className="text-2xl font-bold">
              {trainingData !== undefined ? trainingData.mode : 'undefined'}
            </p>
          </div>
          <div className="stats stats-vertical bg-slate-100 shadow">
            <div className="stat min-w-[340px] sm:w-full">
              <div className="stat-title text-center text-xl font-bold text-black">
                Reading Speed
              </div>
              <div className="stat-value mx-auto text-primary">
                {trainingData !== undefined
                  ? trainingData.wpm + ' WPM'
                  : 'undefined'}
              </div>
            </div>
            {trainingData !== undefined ? renderStats() : null}
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <p className="text-xl">Date taken</p>
              <p className="text-2xl font-bold">
                {trainingData !== undefined
                  ? moment(trainingData.readDate).format('l')
                  : 'undefined'}
              </p>
            </div>
            <div>
              <p className="text-right text-xl">Reading Time</p>
              <p className="text-right text-2xl font-bold">
                {trainingData !== undefined
                  ? getFormattedReadTime(trainingData.readTime)
                  : 'undefined'}
              </p>
            </div>
          </div>

          <Button text="Home" weight="primary" onClick={handleHome} />
          {trainingData !== undefined ? (
            <Button text="Restart" outline onClick={handleRestart} />
          ) : null}
        </div>
      </div>
    </>
  )
}
