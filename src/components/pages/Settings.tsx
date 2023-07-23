import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiError, BiLoader } from 'react-icons/bi'
import { AxiosError } from 'axios'
import { loremPlaceholder } from '../../static/staticData'
import { FormSettingsValues } from '../../types/model'
import { Button, ToastAlert } from '../atoms'
import {
  ColorPicker,
  FixationSelect,
  FontfaceToggler,
  renderFixationLine,
} from '../molecules'
import { useEditSettingMutation } from '../../api/mutation'
import { useFetchUser } from '../../hooks'
import { useSettingStore } from '../../stores'

export const Settings = () => {
  const navigate = useNavigate()
  const [isApplied, setIsApplied] = useState(false)
  const { settingData, setSettingData } = useSettingStore()
  const { isError, isLoading: fetchLoading, isSuccess } = useFetchUser()
  const { mutate, isLoading } = useEditSettingMutation()

  const MemoizedColorPicker = React.memo(ColorPicker)
  const MemoizedFixationSelect = React.memo(FixationSelect)
  const MemoizedFontfaceToggler = React.memo(FontfaceToggler)

  const handleChange = (data: FormSettingsValues = settingData) => {
    mutate(data, {
      onSuccess: (data) => {
        ToastAlert(data.data.message, 'success')

        setTimeout(() => {
          navigate(-1)
        }, 1000)
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          if (!err?.response) {
            ToastAlert(err?.message, 'error')
          } else {
            ToastAlert('Edit tampilan gagal', 'error')
          }
        }
      },
    })
  }

  useEffect(() => {
    if (isSuccess || isError) {
      if (isError) {
        ToastAlert('Fetch settings error', 'error')
      }
      setTimeout(() => {
        setIsApplied(true)
      }, 500)
    }
    return () => {
      setIsApplied(false)
    }
  }, [isSuccess, isError, fetchLoading])

  return (
    <>
      {isApplied ? (
        <div className="mx-auto w-full xl:w-[800px] 2xl:w-2/3">
          <div>
            <div className="flex flex-row justify-between gap-6 md:items-center">
              <label className="label px-0 font-bold">Preview</label>
              {isError ? (
                <div className="flex flex-row items-center">
                  <BiError size={18} className="mr-1 text-red-500" />
                  <label className="label px-0 font-bold text-red-500">
                    Setting tidak tersinkron
                  </label>
                </div>
              ) : null}
            </div>
            <div className="relative min-h-[250px] w-full rounded-md bg-slate-100 p-0 outline outline-1 outline-offset-0">
              {renderFixationLine(settingData.fixationCount)}
              <pre
                className="relative whitespace-pre-line p-2 text-left text-base font-normal sm:text-xl"
                style={{
                  lineHeight: '1.5',
                  fontFamily: settingData.isFontSerif
                    ? 'Literata' || 'serif'
                    : 'Inter' || 'sans-serif',
                }}
              >
                {loremPlaceholder[0].loremLong}
              </pre>
              <pre
                className="absolute top-0 whitespace-pre-line p-2 text-left text-base font-normal text-black dark:text-slate-200 sm:text-xl"
                style={{
                  lineHeight: '1.5',
                  fontFamily: settingData.isFontSerif
                    ? 'Literata' || 'serif'
                    : 'Inter' || 'sans-serif',
                  color: settingData.fontColor,
                }}
              >
                {loremPlaceholder[0].loremShort}
              </pre>
            </div>
          </div>

          <div className="my-6 flex flex-col gap-6 md:flex-row">
            <div>
              <p className="font-bold">Tipe fontface</p>
              <MemoizedFontfaceToggler
                settingData={settingData}
                setSettingData={setSettingData}
              />
            </div>

            <div>
              <p className="font-bold">Garis bantu fiksasi</p>
              <MemoizedFixationSelect
                settingData={settingData}
                setSettingData={setSettingData}
              />
            </div>

            <div>
              <p className="font-bold">Warna highlight kata</p>
              {
                <MemoizedColorPicker
                  settingData={settingData}
                  setSettingData={setSettingData}
                />
              }
            </div>
          </div>
          <div className="mt-2 flex justify-center sm:mx-auto sm:w-[200px]">
            <Button
              text="Apply Settings"
              width="full"
              style="primary"
              disabled={isLoading}
              onClick={() => {
                handleChange()
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center">
          <BiLoader size={32} className="bg- mb-2 animate-spin text-primary" />
          <div className="stat-value animate-pulse text-2xl text-primary">
            Loading
          </div>
        </div>
      )}
    </>
  )
}
