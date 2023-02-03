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
  const { settingData, setSettingData } = useSettingStore()
  const navigate = useNavigate()

  const { mutate, isLoading } = useEditSettingMutation()

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

  return (
    <>
      <div className="mx-auto w-full xl:w-[800px] 2xl:w-2/3">
        <div>
          <label className="label px-0 font-bold">Preview</label>
          <div className="relative min-h-[250px] w-full rounded-md p-0 outline outline-1 outline-offset-0 ">
            {renderFixationLine(settingData.fixationCount)}
            <pre
              className="relative whitespace-pre-line p-2 text-left text-base font-normal  sm:text-xl"
              style={{
                fontFamily: settingData.isFontSerif ? 'serif' : 'sans-serif',
                // textAlign: settingData.isJustified ? 'justify' : 'left',
              }}
            >
              {loremPlaceholder[0].loremLong}
            </pre>
            <pre
              className="absolute top-0 whitespace-pre-line p-2 text-left text-base font-normal text-black dark:text-slate-200 sm:text-xl"
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

        <div className="my-6 flex flex-col gap-6 md:flex-row">
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
            handleChange()
          }}
          disabled={isLoading}
        />
      </div>
    </>
  )
}
