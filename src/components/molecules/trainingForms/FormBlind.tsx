import React from 'react'
import cefr from '../../../assets/training/cefr.png'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiInfoCircle } from 'react-icons/bi'
import { Questions, Training } from '../../../types/model'
import { Button } from '../../atoms'
import { useNavigate } from 'react-router-dom'
import { useTrainingStore } from '../../../stores/TrainingStore'
import {
  QuestionData,
  textChoiceData,
  textData,
  textLevelData,
} from '../../../static/staticData'

export const FormBlind = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch } = useForm<Training>()

  const { addTrainingData } = useTrainingStore()

  const onSubmit: SubmitHandler<Training> = (data) => {
    // console.log('Blind form values: ', data)
    let textOption = {
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
        mode: 'Blind',
        chunksCount: 0,
        wpm: 0,
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
    navigate('/training/blind/simulate')
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
                  <span className="ml-2 mb-auto text-base sm:text-xl">
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
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:justify-center">
              <div className="flex w-full flex-col sm:w-[22.5%]">
                <label className="label px-0 pt-0 font-bold">Pilih Level</label>
                <select
                  className="select-bordered select w-auto"
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
                <label className="label px-0 pt-0 font-bold">Pilih Text</label>
                <select
                  className="select-bordered select w-auto"
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
            </div>
            <div className="mt-2 flex justify-center sm:mx-auto sm:w-[200px]">
              <Button
                text="Set Options"
                type="submit"
                className="btn-primary"
                width="full"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
