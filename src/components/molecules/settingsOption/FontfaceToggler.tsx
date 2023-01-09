import React from 'react'
import { useSettingStore } from '../../../stores/SettingStore'

export const FontfaceToggler = () => {
  const { settingData, setSettingData } = useSettingStore()

  return (
    <>
      <div className="flex items-center gap-2 mt-0 sm:mt-3">
        <p className="inline">Sans-serif</p>
        <input
          type="checkbox"
          className="toggle toggle-md m-0"
          onChange={() => {
            setSettingData({ ...settingData, isFontSerif: !settingData.isFontSerif })
          }}
          checked={settingData.isFontSerif}
        />
        <p className="inline">Serif</p>
      </div>
    </>
  )
}
