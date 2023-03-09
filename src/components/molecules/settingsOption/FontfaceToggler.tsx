import React from 'react'
import { SettingStoreProps } from '../../../stores/SettingStore'

interface FontfaceTogglerProps
  extends Pick<SettingStoreProps, 'settingData' | 'setSettingData'> {}

export const FontfaceToggler = ({
  settingData,
  setSettingData,
}: FontfaceTogglerProps) => {
  const handleToggle = () => {
    setSettingData({
      ...settingData,
      isFontSerif: !settingData.isFontSerif,
    })
  }

  return (
    <>
      <div className="mt-0 flex items-center gap-2 sm:mt-3">
        <p className="inline">Sans-serif</p>
        <input
          type="checkbox"
          className="toggle toggle-md m-0"
          onChange={handleToggle}
          checked={settingData.isFontSerif}
        />
        <p className="inline">Serif</p>
      </div>
    </>
  )
}
