import React from 'react'
import { useSettingStore } from '../../../store/SettingStore'

export const JustificationToggler = () => {
  const { isJustified, toggleJustification } = useSettingStore()

  return (
    <>
      <div className="flex items-center gap-2 mt-0 sm:mt-3">
        <p className="inline">Left-Aligned</p>
        <input
          type="checkbox"
          className="toggle toggle-md m-0"
          onChange={() => {
            toggleJustification()
          }}
          checked={isJustified}
        />
        <p className="inline">Justified</p>
      </div>
    </>
  )
}
