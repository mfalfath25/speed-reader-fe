import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSettingStore } from '../../stores/SettingStore'
import { loremPlaceholder } from '../../static/staticData'
import { Button, ToastAlert } from '../atoms'
import {
  ColorPick,
  FixationSelect,
  FontfaceToggler,
  // JustificationToggler,
  renderFixationLine,
} from '../molecules'
import { FormSettingsValues } from '../../types/model'
import { useEditSettingMutation } from '../../api/mutation'
import { AxiosError } from 'axios'

export const Settings = () => {
  const { settingData } = useSettingStore()
  const navigate = useNavigate()

  const { mutate, isLoading } = useEditSettingMutation()

  const submitChanges = (data: FormSettingsValues = settingData) => {
    mutate(data, {
      onSuccess: (data) => {
        ToastAlert(data.data.message, 'success')

        setTimeout(() => {
          navigate(-1)
        }, 1000)
      },
      onError: (err) => {
        if (err instanceof AxiosError) {
          ToastAlert(err?.response?.data.message, 'error')
        } else {
          ToastAlert('Edit tampilan gagal', 'error')
        }
      },
    })
  }

  return (
    <>
      <div className="w-full xl:w-[800px] 2xl:w-2/3 mx-auto">
        <div>
          <label className="label px-0 font-bold">Preview</label>
          <div className="w-full min-h-[250px] relative outline outline-offset-0 outline-1 p-0 rounded-md ">
            {renderFixationLine(settingData.fixationCount)}
            <pre
              className="relative whitespace-pre-line text-left text-base sm:text-xl font-normal  p-2"
              style={{
                fontFamily: settingData.isFontSerif ? 'serif' : 'sans-serif',
                // textAlign: settingData.isJustified ? 'justify' : 'left',
              }}
            >
              {loremPlaceholder[0].loremLong}
            </pre>
            <pre
              className="absolute top-0 whitespace-pre-line text-left text-base sm:text-xl font-normal p-2 text-black dark:text-slate-200"
              style={{
                fontFamily: settingData.isFontSerif ? 'serif' : 'sans-serif',
                // textAlign: settingData.isJustified ? 'justify' : 'left',
                color: settingData.fontColor,
              }}
            >
              {loremPlaceholder[0].loremShort}
            </pre>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 my-6">
          <div>
            <p className="font-bold">Tipe fontface</p>
            <FontfaceToggler />
          </div>

          {/* <div>
            <p className="font-bold">Justification</p>
            <JustificationToggler />
          </div> */}

          <div>
            <p className="font-bold">Garis bantu fiksasi</p>
            <FixationSelect />
          </div>

          <div>
            <p className="font-bold">Warna highlight kata</p>
            <ColorPick />
          </div>
        </div>
        <Button
          text="Apply Settings"
          width="full"
          weight="primary"
          onClick={() => {
            submitChanges()
          }}
          disabled={isLoading}
        />
      </div>
    </>
  )
}
