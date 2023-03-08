import React from 'react'
import { useSettingStore } from '../../../stores'

export const JustificationToggler = () => {
  // const { isJustified, toggleJustification } = useSettingStore()

  return (
    <>
      <div className="mt-0 flex items-center gap-2 sm:mt-3">
        <p className="inline">Left-Aligned</p>
        <input
          type="checkbox"
          className="toggle toggle-md m-0"
          onChange={() => {
            // toggleJustification()
          }}
          // checked={isJustified}
        />
        <p className="inline">Justified</p>
      </div>
    </>
  )
}
