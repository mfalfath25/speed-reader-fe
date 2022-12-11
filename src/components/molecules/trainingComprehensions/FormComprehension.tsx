import React from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { useTrainingStore } from '../../../store/TrainingStore'
import { AnsweredQuestion, Question, Training } from '../../../types/model'
import { Button } from '../../atoms'

export const FormComprehension = () => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Training>()

  const { trainingData, modifyTrainingData } = useTrainingStore()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: 'answers',
  })

  const onSubmit: SubmitHandler<Training> = (data) => {
    modifyTrainingData(trainingData[trainingData.length - 1].trainingId, {
      ...trainingData[trainingData.length - 1],
      answers: getValues('answers'),
    })
    console.log('Comprehension form values: ', data)
  }

  return (
    <>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 auto-rows-auto mx-0 sm:mx-10">
          {/* {trainingData[trainingData.length - 1]?.text.questions?.allQuestions?.map(
            (item, index) => (
              <div key={index} className="pb-2">
                <label className="label text-base sm:text-xl font-bold">{item.questionText}</label>
                {item.answerOptions.map((item, index) => (
                  <div key={index} className="flex flex-row flex-start">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        className="radio radio-sm checked:bg-blue-500"
                        value={item.answerText}
                        key={index}
                        {...register(`answers.${item.answerGroupIndex}`)}
                      />
                      <span className="label-text pl-2">{item.answerText}</span>
                    </label>
                  </div>
                ))}
              </div>
            )
          )} */}
          {trainingData[trainingData.length - 1]?.text.questions?.allQuestions?.map(
            (item, index) => (
              <div key={index} className="pb-2">
                <label className="label text-base sm:text-xl font-bold">{item.questionText}</label>
                {item.answerOptions.map((item) => (
                  <div key={item.answerText} className="flex flex-row flex-start">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        className="radio radio-sm checked:bg-blue-500"
                        value={item.answerText}
                        key={index}
                        {...register(`answers.${index}`)}
                      />
                      <span className="label-text pl-2">{item.answerText}</span>
                    </label>
                  </div>
                ))}
              </div>
            )
          )}
          <div className="flex justify-center mt-2">
            <Button text="Submit" type="submit" weight="primary" width="full" />
          </div>
        </div>
      </form>
    </>
  )
}
