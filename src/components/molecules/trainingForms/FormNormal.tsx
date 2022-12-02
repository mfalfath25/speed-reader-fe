import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiInfoCircle } from 'react-icons/bi'
import { FormNormalValues } from '../../../types/model'
import { Button } from '../../atoms'
import cefr from '../../../assets/training/cefr.png'
import { useNavigate } from 'react-router-dom'

const textLevelData = [
  { label: 'A1', value: 'A1' },
  { label: 'A2', value: 'A2' },
  { label: 'B1', value: 'B1' },
  { label: 'B2', value: 'B2' },
  { label: 'C1', value: 'C1' },
]

const textChoiceData = [
  { label: 'Text 1', value: 'Text 1' },
  { label: 'Text 2', value: 'Text 2' },
  { label: 'Text 3', value: 'Text 3' },
]

export const FormNormal = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormNormalValues>()

  const onSubmit: SubmitHandler<FormNormalValues> = (data) => {
    if (data.textLevel === 'A1' && data.textChoice === 'Text 1') {
      data.textValue = `The first text is about the history of the English language. It is a very interesting topic. The English language is a West Germanic language that was first spoken in early medieval England and eventually became a global lingua franca. It is named after the Angles, one of the Germanic tribes that migrated to the area of Great Britain that later took their name, England. It is closely related to the Frisian languages, but its vocabulary has been significantly influenced by other Germanic languages, particularly Norse, as well as by Latin and French.`
    } else {
      data.textValue = 'dummy text'
    }
    // addRawText(data)
    navigate('/training/normal/simulate')
    console.log(data)
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
                  value={watch('textLevel')}
                  {...register('textLevel', { required: true })}
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
                  value={watch('textChoice')}
                  {...register('textChoice', { required: true })}
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
                  {...register('chunkValue')}
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
                  {...register('wordsPerMinute')}
                />
                <label className="label-text-alt">(default: 250 WPM)</label>
              </div>
            </div>
            <div className="mx-none">
              <Button text="Set Options" type="submit" weight="primary" width="full" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
