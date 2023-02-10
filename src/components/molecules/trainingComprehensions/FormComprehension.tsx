import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { getTotalAccuracy } from '../../../logic'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { Training } from '../../../types/model'
import { Button, ToastAlert } from '../../atoms'

export const FormComprehension = () => {
  const navigate = useNavigate()
  const history = useLocation()
  const { register, handleSubmit } = useForm<Training>()

  const { setTrainingData } = useTrainingStore()
  const trainingData = useTrainingStore(
    (state) => state.trainingData[state.trainingData.length - 1]
  )

  const onSubmit: SubmitHandler<Training> = (test) => {
    ToastAlert('loading', 'loading', 1000)
    setTrainingData(trainingData.trainingId, {
      ...trainingData,
      answers: test.answers,
      accuracy: getTotalAccuracy(trainingData, test.answers),
    })

    setTimeout(() => {
      if (history.pathname.includes('normal')) {
        navigate('/training/normal/result', {
          replace: true,
        })
      } else if (history.pathname.includes('blind')) {
        navigate('/training/blind/result', {
          replace: true,
        })
      }
    }, 1000)
  }

  useEffect(() => {
    if (trainingData === undefined) navigate('/')
  }, [])

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-0 grid auto-rows-auto grid-cols-1 sm:mx-10">
          {trainingData?.text.questions?.allQuestions?.map((item, index) => (
            <div key={index} className="pb-2">
              <label className="label text-base font-bold sm:text-lg">
                {index + 1}. {item.questionText}
              </label>
              {item.answerOptions.map((item) => (
                <div key={item.answerText} className="flex-start flex flex-row">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      className="radio radio-sm checked:bg-blue-500"
                      value={item.answerText}
                      key={item.answerText}
                      {...register(`answers.${index}`)}
                      required
                    />
                    <span className="label-text pl-2">{item.answerText}</span>
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div className="mt-2 flex justify-center sm:mx-auto sm:w-[200px]">
            <Button text="Submit" type="submit" weight="primary" width="full" />
          </div>
        </div>
      </form>
    </>
  )
}
