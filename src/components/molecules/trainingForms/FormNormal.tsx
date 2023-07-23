import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { BiInfoCircle } from 'react-icons/bi'
import { Questions, Training } from '../../../types/model'
import { Button } from '../../atoms'
import cefr from '../../../assets/training/cefr.png'
import {
  QuestionData,
  textChoiceData,
  textData,
  textLevelData,
} from '../../../static/staticData'
import { useTrainingStore } from '../../../stores'

export const FormNormal = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch } = useForm<Training>()

  const { addTrainingData } = useTrainingStore()

  const onSubmit: SubmitHandler<Training> = (data) => {
    const textOption = {
      textValue:
        textData.find(
          (item) =>
            item.textLevel === data.text.textLevel &&
            item.textChoice === data.text.textChoice
        )?.textValue || '',
      questionPairId:
        textData.find(
          (item) =>
            item.textLevel === data.text.textLevel &&
            item.textChoice === data.text.textChoice
        )?.questionPairId || 0,
    }

    // function to get all questions based on questionPairId
    const getAllQuestion = () => {
      const arrayIndex = QuestionData.findIndex(
        (item) => item.questionPairId === textOption.questionPairId
      )
      return QuestionData[arrayIndex].allQuestions
    }

    // assign function returns to a new object (questionOption)
    const questionOption: Questions = {
      questionPairId: textOption.questionPairId,
      allQuestions: getAllQuestion(),
    }

    // add training data to store
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
  }

  return (
    <>
      <div className="mx-0 2xl:mx-20">
        <div className="mb-4 flex justify-center sm:mb-10">
          <div className="alert h-fit">
            <div className="flex flex-col md:flex-row">
              <div className="mb-auto mr-auto flex flex-row">
                <div>
                  <BiInfoCircle size={28} className="w-auto" />
                </div>
                <div className="flex flex-col">
                  <span className="ml-2 text-base font-bold sm:text-xl">
                    Info
                  </span>
                  <span className="mb-auto ml-2 text-base sm:text-xl">
                    Level materi bacaan mengacu pada standar tingkat CEFR <br />
                    <br /> CEFR (Common European Framework of Reference for
                    Languages) adalah salah satu framework yang menjelaskan
                    kemahiran bahasa Anda.
                  </span>
                </div>
              </div>
              <img
                src={cefr}
                alt="CEFR Levels"
                className="w-5/6 rounded-xl sm:max-w-sm xl:max-w-md"
              />
            </div>
          </div>
        </div>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div className="flex w-full flex-col sm:w-[22.5%]">
                <div className="flex flex-row gap-x-1 sm:flex-col">
                  <label className="label px-0 pt-0 font-bold">
                    Pilih Level
                  </label>
                  <label className="label px-0 pt-0 font-normal">
                    (Select Level)
                  </label>
                </div>
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
              <div className="flex w-full flex-col sm:w-[22.5%]">
                <div className="flex flex-row gap-x-1 sm:flex-col">
                  <label className="label px-0 pt-0 font-bold">
                    Pilih Teks
                  </label>
                  <label className="label px-0 pt-0 font-normal">
                    (Select Text)
                  </label>
                </div>
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
                <div className="flex flex-row gap-x-1 sm:flex-col">
                  <label className="label px-0 pt-0 font-bold">
                    Jumlah Highlight Kata
                  </label>
                  <label className="label px-0 pt-0 font-normal">
                    (Word Chunks Count)
                  </label>
                </div>
                <input
                  type="number"
                  placeholder="(1-5)"
                  className="input input-bordered w-full"
                  min="1"
                  max="5"
                  {...register('chunksCount', { valueAsNumber: true })}
                />
                <label className="label-text-alt">(default: 3 kata)</label>
              </div>
              <div className="w-full sm:w-[22.5%]">
                <div className="flex flex-row gap-x-1 sm:flex-col">
                  <label className="label px-0 pt-0 font-bold">
                    Target Kata per Menit
                  </label>
                  <label className="label px-0 pt-0 font-normal">
                    (WPM Target)
                  </label>
                </div>
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
            <div className="mt-2 flex justify-center sm:mx-auto sm:w-[200px]">
              <Button
                text="Set Options"
                type="submit"
                style="primary"
                width="full"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
