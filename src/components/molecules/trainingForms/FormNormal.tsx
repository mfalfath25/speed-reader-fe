import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiInfoCircle } from 'react-icons/bi'
import { Question, Questions, Training } from '../../../types/model'
import { Button } from '../../atoms'
import cefr from '../../../assets/training/cefr.png'
import { useNavigate } from 'react-router-dom'
import { useTrainingStore } from '../../../stores/TrainingStore'
import { QuestionData, textChoiceData, textData, textLevelData } from '../../../static/staticData'

export const FormNormal = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Training>()

  const { addTrainingData } = useTrainingStore()

  const onSubmit: SubmitHandler<Training> = (data) => {
    let textOption = {
      textValue:
        textData.find(
          (item) =>
            item.textLevel === data.text.textLevel && item.textChoice === data.text.textChoice
        )?.textValue || '',
      questionPairId:
        textData.find(
          (item) =>
            item.textLevel === data.text.textLevel && item.textChoice === data.text.textChoice
        )?.questionPairId || 0,
    }

    const getAllQuestion = () => {
      const arrayIndex = QuestionData.findIndex(
        (item) => item.questionPairId === textOption.questionPairId
      )
      return QuestionData[arrayIndex].allQuestions
    }

    let questionOption: Questions = {
      questionPairId: textOption.questionPairId,
      allQuestions: getAllQuestion(),
    }

    addTrainingData(
      (data = {
        ...data,
        mode: 'Normal',
        chunksCount: data.chunksCount ? data.chunksCount : 3,
        wpm: data.wpm ? data.wpm : 250,
        text: {
          ...data.text,
          textLevel: data.text.textLevel,
          textChoice: data.text.textChoice,
          textValue: textOption.textValue,
          questionPairId: textOption.questionPairId,
          questions: questionOption,
        },
      })
    )
    navigate('/training/normal/simulate')
    // console.log('Normal form values: ', data)
  }

  return (
    <>
      <div className="mx-0 2xl:mx-20">
        <div className="flex justify-center mb-4 sm:mb-10">
          <div className="alert h-fit">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-row mb-auto mr-auto">
                <div>
                  <BiInfoCircle size={28} className="w-auto" />
                </div>
                <div className="flex flex-col">
                  <span className="ml-2 font-bold text-base sm:text-xl">Info</span>
                  <span className="ml-2 mb-auto text-base sm:text-xl">
                    Level materi bacaan mengacu pada standar tingkat CEFR <br />
                    <br /> CEFR (Common European Framework of Reference for Languages) adalah salah
                    satu framework yang menjelaskan kemahiran bahasa Anda.
                  </span>
                </div>
              </div>
              <img
                src={cefr}
                alt="CEFR Levels"
                className="rounded-xl w-5/6 sm:max-w-sm xl:max-w-md"
              />
            </div>
          </div>
        </div>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-10">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-col w-full sm:w-[22.5%]">
                <label className="label px-0 pt-0 font-bold">Pilih Level</label>
                <select
                  className="select select-bordered w-auto"
                  value={watch('text.textLevel')}
                  {...register('text.textLevel', { required: true })}
                >
                  {textLevelData.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full sm:w-[22.5%]">
                <label className="label px-0 pt-0 font-bold">Pilih Text</label>
                <select
                  className="select select-bordered w-auto"
                  value={watch('text.textChoice')}
                  {...register('text.textChoice', { required: true })}
                >
                  {textChoiceData.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full sm:w-[22.5%]">
                <label className="label px-0 pt-0 font-bold">Word Chunks</label>
                <input
                  type="number"
                  placeholder="(1-5)"
                  className="input input-bordered w-full"
                  min="1"
                  max="5"
                  {...register('chunksCount', { valueAsNumber: true })}
                />
                <label className="label-text-alt">(default: 3 chunks)</label>
              </div>
              <div className="w-full sm:w-[22.5%]">
                <label className="label px-0 pt-0 font-bold">Target WPM</label>
                <input
                  type="number"
                  placeholder="(100-1000)"
                  className="input input-bordered w-full"
                  min="100"
                  max="1000"
                  {...register('wpm', { valueAsNumber: true })}
                />
                <label className="label-text-alt">(default: 250 WPM)</label>
              </div>
            </div>
            <div className="flex justify-center mt-2 sm:mx-auto sm:w-[200px]">
              <Button text="Set Options" type="submit" weight="primary" width="full" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
