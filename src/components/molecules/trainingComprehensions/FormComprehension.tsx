import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { getTotalAccuracy } from '../../../logic'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { Training } from '../../../types/model'
import { Button, ToastAlert } from '../../atoms'

export const FormComprehension = () => {
  const navigate = useNavigate()
  const history = useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Training>()

  const { setTrainingData } = useTrainingStore()
  const data = useTrainingStore((state) => state.trainingData)

  const onSubmit: SubmitHandler<Training> = (test) => {
    // console.log('Comprehension form values: ', test)
    ToastAlert('loading', 'loading', 1000)
    setTrainingData(data[data.length - 1].trainingId, {
      ...data[data.length - 1],
      answers: test.answers,
      accuracy: getTotalAccuracy(data[data.length - 1], test.answers),
    })

    setTimeout(() => {
      if (history.pathname.includes('normal')) {
        navigate('/training/normal/result')
      } else if (history.pathname.includes('blind')) {
        navigate('/training/blind/result')
      }
    }, 1000)
  }

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 auto-rows-auto mx-0 sm:mx-10">
          {data[data.length - 1]?.text.questions?.allQuestions?.map((item, index) => (
            <div key={index} className="pb-2">
              <label className="label text-base sm:text-lg font-bold">
                {index + 1}. {item.questionText}
              </label>
              {item.answerOptions.map((item) => (
                <div key={item.answerText} className="flex flex-row flex-start">
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
          <div className="flex justify-center mt-2 sm:mx-auto sm:w-[200px]">
            <Button text="Submit" type="submit" weight="primary" width="full" />
          </div>
        </div>
      </form>
    </>
  )
}
