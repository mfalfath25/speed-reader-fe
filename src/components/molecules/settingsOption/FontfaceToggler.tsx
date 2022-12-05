import React from 'react'
import { useSettingStore } from '../../../store/SettingStore'

export const FontfaceToggler = () => {
  const { isFontSerif, toggleFontSerif } = useSettingStore()

  return (
    <>
      <div className="flex items-center gap-2 mt-0 sm:mt-3">
        <p className="inline">Sans-serif</p>
        <input
          type="checkbox"
          className="toggle toggle-md m-0"
          onChange={() => {
            toggleFontSerif()
          }}
          checked={isFontSerif}
        />
        <p className="inline">Serif</p>
      </div>
    </>
  )
}
